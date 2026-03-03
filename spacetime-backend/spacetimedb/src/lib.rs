use spacetimedb::{Identity, ReducerContext, Table};

#[spacetimedb::table(name = "user", public, accessor = user)]
pub struct User {
    #[primary_key]
    pub identity: Identity,
    pub username: String,
    pub created_at: u64,
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
// User Reducers
// ==========================================
#[spacetimedb::reducer]
pub fn register_user(ctx: &ReducerContext, username: String) -> Result<(), String> {
    spacetimedb::log::info!("DEBUG: register_user called with username: '{}'", username);
    
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
        // use timestamp in ms assuming we have some way to get time, or just 0
        created_at: 0,
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
