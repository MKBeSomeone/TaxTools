import './Page.css'

export default function About() {
  return (
    <main className="page">
      <div className="page-content">
        <h1>About TaxTools</h1>
        <p>
          TaxTools is a free resource designed to help individuals and small
          business owners make sense of common tax forms. We break down complex
          IRS documents into plain language so you can file with confidence.
        </p>
        <h2>What we cover</h2>
        <ul className="about-list">
          <li><strong>K-1</strong> — Schedule K-1 for partnerships, S-corps, trusts, and estates.</li>
          <li><strong>W-2</strong> — Wage and Tax Statement from employers.</li>
        </ul>
        <p>
          We are not tax advisors. Always consult a licensed CPA or tax
          professional for advice specific to your situation.
        </p>
      </div>
    </main>
  )
}
