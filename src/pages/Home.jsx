import './Page.css'

export default function Home() {
  return (
    <main className="page">
      <div className="page-hero">
        <h1>Welcome to TaxTools</h1>
        <p className="page-subtitle">
          Simple, clear tools to help you understand your tax documents.
        </p>
        <div className="card-grid">
          <div className="card">
            <span className="card-icon">📄</span>
            <h2>K-1</h2>
            <p>Understand partnership and S-corp income distributions.</p>
          </div>
          <div className="card">
            <span className="card-icon">📋</span>
            <h2>W-2</h2>
            <p>Decode your wage and tax statement from your employer.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
