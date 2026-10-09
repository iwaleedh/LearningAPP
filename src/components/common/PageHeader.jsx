// One header pattern for every page: title, one-line description, optional actions.
export default function PageHeader({ title, description, actions = null, id }) {
    return (
        <header className="page-header">
            <div className="page-header-text">
                <h1 className="page-title" id={id}>{title}</h1>
                {description ? <p className="page-description">{description}</p> : null}
            </div>
            {actions ? <div className="page-header-actions">{actions}</div> : null}
        </header>
    );
}
