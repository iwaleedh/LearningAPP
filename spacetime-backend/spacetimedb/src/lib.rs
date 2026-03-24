use spacetimedb::{Identity, ReducerContext, Table};

// ==========================================
// Study Content Tables
// ==========================================

#[spacetimedb::table(name = "user", public, accessor = user)]
pub struct User {
    #[primary_key]
    pub identity: Identity,
    pub username: String,
    pub created_at: u64,
    pub role: String, // "student" | "teacher"
}

#[spacetimedb::table(name = "note", public, accessor = note)]
pub struct Note {
    #[primary_key]
    pub note_id: String,
    pub owner_identity: Identity,
    pub subject: String,
    pub title: String,
    pub subtopic_title: String,
    pub breadcrumbs: String,
    pub content_json: String,
    pub confidence_score: u8,
    pub estimated_read_minutes: u32,
    pub created_at: u64,
    pub last_edited_at: u64,
}

#[spacetimedb::table(name = "flashcard", public, accessor = flashcard)]
pub struct Flashcard {
    #[primary_key]
    pub card_id: String,
    pub owner_identity: Identity,
    pub subject: String,
    pub source_note_id: String,
    pub source_label: String,
    pub front: String,
    pub back: String,
    pub created_at: u64,
}

#[spacetimedb::table(name = "note_asset", public, accessor = note_asset)]
pub struct NoteAsset {
    #[primary_key]
    pub asset_id: String,
    pub note_id: String,
    pub owner_identity: Identity,
    pub asset_type: String,
    pub data: String,
    pub created_at: u64,
}

// ==========================================
// Live Class Tables
// ==========================================

#[spacetimedb::table(name = "live_class_session", public, accessor = live_class_session)]
pub struct LiveClassSession {
    #[primary_key]
    #[auto_inc]
    pub class_id: u64,
    pub host_identity: Identity,
    pub title: String,
    pub background_type: String, // "white"|"lined"|"grid"|"dotted"|"yellow"
    pub status: String,          // "active" | "ended"
    pub created_at: u64,
}

#[spacetimedb::table(name = "live_class_cursor", public, accessor = live_class_cursor)]
pub struct LiveClassCursor {
    #[primary_key]
    pub cursor_id: Identity, // == user identity
    pub class_id: u64,
    pub x: f32,
    pub y: f32,
    pub tool: String,
    pub updated_at: u64,
}

#[spacetimedb::table(name = "class_timer", public, accessor = class_timer)]
pub struct ClassTimer {
    #[primary_key]
    pub class_id: u64,
    pub mode: String,       // "stopwatch" | "countdown"
    pub state: String,      // "stopped" | "running" | "paused"
    pub elapsed_ms: u64,
    pub target_ms: u64,
    pub started_at: u64,
}

#[spacetimedb::table(name = "hand_raise", public, accessor = hand_raise)]
pub struct HandRaise {
    #[primary_key]
    #[auto_inc]
    pub raise_id: u64,
    pub class_id: u64,
    pub student_identity: Identity,
    pub status: String,     // "raised" | "acknowledged"
    pub raised_at: u64,
}

#[spacetimedb::table(name = "annotation_stroke", public, accessor = annotation_stroke)]
pub struct AnnotationStroke {
    #[primary_key]
    #[auto_inc]
    pub stroke_id: u64,
    pub session_id: u64,
    pub page_number: u32,
    pub user_identity: Identity,
    pub fabric_object_json: String,
    pub created_at: u64,
    pub updated_at: u64,
}

// ==========================================
// Exam Session Tables (Phase 2)
// ==========================================

#[spacetimedb::table(name = "live_session", public, accessor = live_session)]
pub struct LiveSession {
    #[primary_key]
    #[auto_inc]
    pub session_id: u64,
    pub host_identity: Identity,
    pub paper_id: String,
    pub title: String,
    pub created_at: u64,
    pub status: String, // "active" | "ended"
}

#[spacetimedb::table(name = "session_participant", public, accessor = session_participant)]
pub struct SessionParticipant {
    #[primary_key]
    #[auto_inc]
    pub participant_id: u64,
    pub session_id: u64,
    pub user_identity: Identity,
    pub role: String,   // "host" | "editor" | "viewer"
    pub joined_at: u64,
}

#[spacetimedb::table(name = "session_invite", public, accessor = session_invite)]
pub struct SessionInvite {
    #[primary_key]
    #[auto_inc]
    pub invite_id: u64,
    pub session_id: u64,
    pub from_identity: Identity,
    pub to_username: String,
    pub status: String, // "pending" | "accepted" | "declined"
    pub created_at: u64,
}

// ==========================================
// User Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn register_user(ctx: &ReducerContext, username: String) -> Result<(), String> {
    if ctx.db.user().identity().find(ctx.sender()).is_some() {
        return Err("User already registered".to_string());
    }
    
    for user in ctx.db.user().iter() {
        if user.username == username {
            return Err("Username already taken".to_string());
        }
    }

    ctx.db.user().insert(User {
        identity: ctx.sender(),
        username,
        created_at: 0,
        role: "student".to_string(),
    });
    
    Ok(())
}

fn check_auth(ctx: &ReducerContext) -> Result<User, String> {
    match ctx.db.user().identity().find(ctx.sender()) {
        Some(user) => Ok(user),
        None => Err("User not authenticated/registered".to_string()),
    }
}

// ==========================================
// Note Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn upsert_note(
    ctx: &ReducerContext,
    note_id: String,
    subject: String,
    title: String,
    subtopic_title: String,
    breadcrumbs: String,
    content_json: String,
    confidence_score: u8,
    estimated_read_minutes: u32,
) -> Result<(), String> {
    let user = check_auth(ctx)?;

    if let Some(mut existing_note) = ctx.db.note().note_id().find(note_id.clone()) {
        if existing_note.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        
        existing_note.subject = subject;
        existing_note.title = title;
        existing_note.subtopic_title = subtopic_title;
        existing_note.breadcrumbs = breadcrumbs;
        existing_note.content_json = content_json;
        existing_note.confidence_score = confidence_score;
        existing_note.estimated_read_minutes = estimated_read_minutes;
        
        ctx.db.note().note_id().update(existing_note);
    } else {
        ctx.db.note().insert(Note {
            note_id,
            owner_identity: user.identity,
            subject,
            title,
            subtopic_title,
            breadcrumbs,
            content_json,
            confidence_score,
            estimated_read_minutes,
            created_at: 0,
            last_edited_at: 0,
        });
    }
    Ok(())
}

#[spacetimedb::reducer]
pub fn delete_note(ctx: &ReducerContext, note_id: String) -> Result<(), String> {
    let user = check_auth(ctx)?;
    
    if let Some(note) = ctx.db.note().note_id().find(note_id.clone()) {
        if note.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        ctx.db.note().note_id().delete(note_id);
    } else {
        return Err("Note not found".to_string());
    }
    Ok(())
}

// ==========================================
// Flashcard Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn save_flashcard(
    ctx: &ReducerContext,
    card_id: String,
    subject: String,
    source_note_id: String,
    source_label: String,
    front: String,
    back: String,
) -> Result<(), String> {
    let user = check_auth(ctx)?;

    if let Some(mut existing_card) = ctx.db.flashcard().card_id().find(card_id.clone()) {
        if existing_card.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        
        existing_card.subject = subject;
        existing_card.source_note_id = source_note_id;
        existing_card.source_label = source_label;
        existing_card.front = front;
        existing_card.back = back;
        
        ctx.db.flashcard().card_id().update(existing_card);
    } else {
        ctx.db.flashcard().insert(Flashcard {
            card_id,
            owner_identity: user.identity,
            subject,
            source_note_id,
            source_label,
            front,
            back,
            created_at: 0,
        });
    }
    Ok(())
}

#[spacetimedb::reducer]
pub fn delete_flashcard(ctx: &ReducerContext, card_id: String) -> Result<(), String> {
    let user = check_auth(ctx)?;
    
    if let Some(card) = ctx.db.flashcard().card_id().find(card_id.clone()) {
        if card.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        ctx.db.flashcard().card_id().delete(card_id);
    } else {
        return Err("Flashcard not found".to_string());
    }
    Ok(())
}

// ==========================================
// NoteAsset Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn save_note_asset(
    ctx: &ReducerContext,
    asset_id: String,
    note_id: String,
    asset_type: String,
    data: String,
) -> Result<(), String> {
    let user = check_auth(ctx)?;

    if let Some(mut existing_asset) = ctx.db.note_asset().asset_id().find(asset_id.clone()) {
        if existing_asset.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        
        existing_asset.note_id = note_id;
        existing_asset.asset_type = asset_type;
        existing_asset.data = data;
        
        ctx.db.note_asset().asset_id().update(existing_asset);
    } else {
        ctx.db.note_asset().insert(NoteAsset {
            asset_id,
            owner_identity: user.identity,
            note_id,
            asset_type,
            data,
            created_at: 0,
        });
    }
    Ok(())
}

#[spacetimedb::reducer]
pub fn delete_note_asset(ctx: &ReducerContext, asset_id: String) -> Result<(), String> {
    let user = check_auth(ctx)?;
    
    if let Some(asset) = ctx.db.note_asset().asset_id().find(asset_id.clone()) {
        if asset.owner_identity != user.identity {
            return Err("Not authorized".to_string());
        }
        ctx.db.note_asset().asset_id().delete(asset_id);
    } else {
        return Err("Asset not found".to_string());
    }
    Ok(())
}

// ==========================================
// Teacher Role Reducer
// ==========================================
#[spacetimedb::reducer]
pub fn set_teacher_role(ctx: &ReducerContext, role: String) -> Result<(), String> {
    let mut user = check_auth(ctx)?;
    if role != "student" && role != "teacher" {
        return Err("Invalid role. Must be 'student' or 'teacher'.".to_string());
    }
    user.role = role;
    ctx.db.user().identity().update(user);
    Ok(())
}

// ==========================================
// Live Class Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn create_live_class(ctx: &ReducerContext, title: String, background_type: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let session = LiveClassSession {
        class_id: 0, // auto_inc
        host_identity: ctx.sender(),
        title,
        background_type,
        status: "active".to_string(),
        created_at: 0,
    };
    let inserted = ctx.db.live_class_session().insert(session);

    // Add host as participant
    ctx.db.session_participant().insert(SessionParticipant {
        participant_id: 0, // auto_inc
        session_id: inserted.class_id,
        user_identity: ctx.sender(),
        role: "host".to_string(),
        joined_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn join_live_class(ctx: &ReducerContext, class_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let session = ctx.db.live_class_session().class_id().find(class_id)
        .ok_or_else(|| "Live class not found".to_string())?;

    if session.status != "active" {
        return Err("Class is no longer active".to_string());
    }

    // Check if already joined
    for p in ctx.db.session_participant().iter() {
        if p.session_id == class_id && p.user_identity == ctx.sender() {
            return Ok(()); // already in class
        }
    }

    ctx.db.session_participant().insert(SessionParticipant {
        participant_id: 0, // auto_inc
        session_id: class_id,
        user_identity: ctx.sender(),
        role: "viewer".to_string(),
        joined_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn end_live_class(ctx: &ReducerContext, class_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut session = ctx.db.live_class_session().class_id().find(class_id)
        .ok_or_else(|| "Live class not found".to_string())?;

    if session.host_identity != ctx.sender() {
        return Err("Only the host can end the class".to_string());
    }

    session.status = "ended".to_string();
    ctx.db.live_class_session().class_id().update(session);
    Ok(())
}

#[spacetimedb::reducer]
pub fn set_background(ctx: &ReducerContext, class_id: u64, background_type: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut session = ctx.db.live_class_session().class_id().find(class_id)
        .ok_or_else(|| "Live class not found".to_string())?;

    if session.host_identity != ctx.sender() {
        return Err("Only the host can change the background".to_string());
    }

    session.background_type = background_type;
    ctx.db.live_class_session().class_id().update(session);
    Ok(())
}

#[spacetimedb::reducer]
pub fn update_class_timer(
    ctx: &ReducerContext,
    class_id: u64,
    mode: String,
    state: String,
    elapsed_ms: u64,
    target_ms: u64,
) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    // Verify class exists
    let session = ctx.db.live_class_session().class_id().find(class_id)
        .ok_or_else(|| "Live class not found".to_string())?;

    if session.host_identity != ctx.sender() {
        return Err("Only the host can control the timer".to_string());
    }

    if let Some(mut timer) = ctx.db.class_timer().class_id().find(class_id) {
        timer.mode = mode;
        timer.state = state;
        timer.elapsed_ms = elapsed_ms;
        timer.target_ms = target_ms;
        timer.started_at = 0;
        ctx.db.class_timer().class_id().update(timer);
    } else {
        ctx.db.class_timer().insert(ClassTimer {
            class_id,
            mode,
            state,
            elapsed_ms,
            target_ms,
            started_at: 0,
        });
    }
    Ok(())
}

#[spacetimedb::reducer]
pub fn raise_hand(ctx: &ReducerContext, class_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    // Verify class exists and is active
    let session = ctx.db.live_class_session().class_id().find(class_id)
        .ok_or_else(|| "Live class not found".to_string())?;
    if session.status != "active" {
        return Err("Class is not active".to_string());
    }

    ctx.db.hand_raise().insert(HandRaise {
        raise_id: 0, // auto_inc
        class_id,
        student_identity: ctx.sender(),
        status: "raised".to_string(),
        raised_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn acknowledge_hand_raise(ctx: &ReducerContext, raise_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut raise = ctx.db.hand_raise().raise_id().find(raise_id)
        .ok_or_else(|| "Hand raise not found".to_string())?;

    // Verify caller is host of the class
    let session = ctx.db.live_class_session().class_id().find(raise.class_id)
        .ok_or_else(|| "Live class not found".to_string())?;
    if session.host_identity != ctx.sender() {
        return Err("Only the host can acknowledge hand raises".to_string());
    }

    raise.status = "acknowledged".to_string();
    ctx.db.hand_raise().raise_id().update(raise);
    Ok(())
}

#[spacetimedb::reducer]
pub fn update_cursor(ctx: &ReducerContext, class_id: u64, x: f32, y: f32, tool: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    if let Some(mut cursor) = ctx.db.live_class_cursor().cursor_id().find(ctx.sender()) {
        cursor.class_id = class_id;
        cursor.x = x;
        cursor.y = y;
        cursor.tool = tool;
        cursor.updated_at = 0;
        ctx.db.live_class_cursor().cursor_id().update(cursor);
    } else {
        ctx.db.live_class_cursor().insert(LiveClassCursor {
            cursor_id: ctx.sender(),
            class_id,
            x,
            y,
            tool,
            updated_at: 0,
        });
    }
    Ok(())
}

// ==========================================
// Exam Session Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn create_live_session(ctx: &ReducerContext, paper_id: String, title: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let session = LiveSession {
        session_id: 0, // auto_inc
        host_identity: ctx.sender(),
        paper_id,
        title,
        created_at: 0,
        status: "active".to_string(),
    };
    let inserted = ctx.db.live_session().insert(session);

    ctx.db.session_participant().insert(SessionParticipant {
        participant_id: 0, // auto_inc
        session_id: inserted.session_id,
        user_identity: ctx.sender(),
        role: "host".to_string(),
        joined_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn join_session(ctx: &ReducerContext, session_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let session = ctx.db.live_session().session_id().find(session_id)
        .ok_or_else(|| "Session not found".to_string())?;

    if session.status != "active" {
        return Err("Session is no longer active".to_string());
    }

    // Check if already joined
    for p in ctx.db.session_participant().iter() {
        if p.session_id == session_id && p.user_identity == ctx.sender() {
            return Ok(());
        }
    }

    ctx.db.session_participant().insert(SessionParticipant {
        participant_id: 0, // auto_inc
        session_id,
        user_identity: ctx.sender(),
        role: "viewer".to_string(),
        joined_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn end_session(ctx: &ReducerContext, session_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut session = ctx.db.live_session().session_id().find(session_id)
        .ok_or_else(|| "Session not found".to_string())?;

    if session.host_identity != ctx.sender() {
        return Err("Only the host can end the session".to_string());
    }

    session.status = "ended".to_string();
    ctx.db.live_session().session_id().update(session);
    Ok(())
}

#[spacetimedb::reducer]
pub fn invite_to_session(ctx: &ReducerContext, session_id: u64, target_username: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    // Verify session exists
    let _session = ctx.db.live_session().session_id().find(session_id)
        .ok_or_else(|| "Session not found".to_string())?;

    ctx.db.session_invite().insert(SessionInvite {
        invite_id: 0, // auto_inc
        session_id,
        from_identity: ctx.sender(),
        to_username: target_username,
        status: "pending".to_string(),
        created_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn respond_to_invite(ctx: &ReducerContext, invite_id: u64, accept: bool) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut invite = ctx.db.session_invite().invite_id().find(invite_id)
        .ok_or_else(|| "Invite not found".to_string())?;

    // Verify the invite is for the current user
    let current_user = ctx.db.user().identity().find(ctx.sender())
        .ok_or_else(|| "User not found".to_string())?;
    if invite.to_username != current_user.username {
        return Err("This invite is not for you".to_string());
    }

    if accept {
        let sid = invite.session_id;
        invite.status = "accepted".to_string();
        ctx.db.session_invite().invite_id().update(invite);

        // Add user as participant
        ctx.db.session_participant().insert(SessionParticipant {
            participant_id: 0, // auto_inc
            session_id: sid,
            user_identity: ctx.sender(),
            role: "editor".to_string(),
            joined_at: 0,
        });
    } else {
        invite.status = "declined".to_string();
        ctx.db.session_invite().invite_id().update(invite);
    }

    Ok(())
}

// ==========================================
// Annotation Stroke Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn add_stroke(
    ctx: &ReducerContext,
    session_id: u64,
    page_number: u32,
    fabric_object_json: String,
) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    ctx.db.annotation_stroke().insert(AnnotationStroke {
        stroke_id: 0, // auto_inc
        session_id,
        page_number,
        user_identity: ctx.sender(),
        fabric_object_json,
        created_at: 0,
        updated_at: 0,
    });

    Ok(())
}

#[spacetimedb::reducer]
pub fn update_stroke(ctx: &ReducerContext, stroke_id: u64, fabric_object_json: String) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let mut stroke = ctx.db.annotation_stroke().stroke_id().find(stroke_id)
        .ok_or_else(|| "Stroke not found".to_string())?;

    if stroke.user_identity != ctx.sender() {
        return Err("Not authorized to update this stroke".to_string());
    }

    stroke.fabric_object_json = fabric_object_json;
    stroke.updated_at = 0;
    ctx.db.annotation_stroke().stroke_id().update(stroke);
    Ok(())
}

#[spacetimedb::reducer]
pub fn delete_stroke(ctx: &ReducerContext, stroke_id: u64) -> Result<(), String> {
    let _user = check_auth(ctx)?;

    let stroke = ctx.db.annotation_stroke().stroke_id().find(stroke_id)
        .ok_or_else(|| "Stroke not found".to_string())?;

    if stroke.user_identity != ctx.sender() {
        return Err("Not authorized to delete this stroke".to_string());
    }

    ctx.db.annotation_stroke().stroke_id().delete(stroke_id);
    Ok(())
}
