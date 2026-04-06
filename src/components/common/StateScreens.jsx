import React from 'react';
import { Inbox, AlertTriangle } from 'lucide-react';
import './StateScreens.css';

export function EmptyState({ 
  icon: Icon = Inbox, 
  title = 'No items found', 
  description = 'There is nothing to display here yet.', 
  action, 
  className = '' 
}) {
  const iconNode = React.createElement(Icon, { size: 48, strokeWidth: 1.5 });

  return (
    <div className={`empty-state ${className}`}>
      <div className="empty-state-icon">
        {iconNode}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {action && (
        <button 
          className={`btn ${action.variant || 'btn-primary'} empty-state-action`}
          onClick={action.onClick}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export function ErrorState({ 
  icon: Icon = AlertTriangle, 
  title = 'Something went wrong', 
  description = 'An error occurred while loading this content. Please try again.', 
  retryAction, 
  className = '' 
}) {
  const iconNode = React.createElement(Icon, { size: 48, strokeWidth: 1.5 });

  return (
    <div className={`error-state ${className}`}>
      <div className="error-state-icon">
        {iconNode}
      </div>
      <h3 className="error-state-title">{title}</h3>
      <p className="error-state-desc">{description}</p>
      {retryAction && (
        <button 
          className="btn btn-secondary error-state-action"
          onClick={retryAction.onClick}
        >
          {retryAction.label || 'Retry'}
        </button>
      )}
    </div>
  );
}
