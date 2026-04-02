import sys
content = """
/* Advanced Page Bento Styling */
.advanced-hub {
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: var(--space-6);
}

.advanced-page-header {
    background: linear-gradient(135deg, var(--color-primary-50), var(--color-bg-secondary));
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl, 1rem);
    padding: var(--space-5);
    margin-bottom: var(--space-5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.advanced-title-group {
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.advanced-subject-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

.advanced-page-title {
    margin: 0 0 var(--space-1) 0;
    font-size: var(--font-size-2xl);
    font-weight: 700;
}

.advanced-page-qual {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: var(--font-size-base);
}

.advanced-card {
    border-radius: var(--radius-2xl, 1rem);
    border: 1px solid var(--color-border-light);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    margin-bottom: var(--space-5);
    padding: var(--space-4) var(--space-5);
    background: var(--color-surface);
}

.advanced-card-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border-light);
}

.advanced-card-header h3,
.advanced-card-header h4 {
    margin: 0;
    font-weight: 600;
    color: var(--color-text);
}

.advanced-card-icon {
    color: var(--color-primary);
}

.advanced-card-body {
    padding-top: var(--space-2);
}
"""

with open("src/pages/Pages.css", "w") as f:
    f.write(content)
