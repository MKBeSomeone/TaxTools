import './Page.css'

const fields = [
  { box: '1', label: 'Ordinary Business Income (Loss)', description: 'Your share of the partnership or S-corp net ordinary income or loss.' },
  { box: '2', label: 'Net Rental Real Estate Income (Loss)', description: 'Income or loss from rental real estate activities held by the entity.' },
  { box: '5', label: 'Interest Income', description: 'Your share of interest income earned by the entity.' },
  { box: '6a', label: 'Ordinary Dividends', description: 'Your share of dividend income.' },
  { box: '9a', label: 'Net Long-Term Capital Gain (Loss)', description: 'Your share of long-term capital gains or losses — reported on Schedule D.' },
  { box: '14', label: 'Self-Employment Earnings', description: 'Used to calculate self-employment tax on Schedule SE.' },
]

export default function K1() {
  return (
    <main className="page">
      <div className="page-content">
        <h1>Schedule K-1</h1>
        <p className="page-subtitle">
          A K-1 reports your share of income, deductions, and credits from a
          partnership, S-corporation, trust, or estate. Each box maps to a
          specific line on your personal return.
        </p>
        <div className="field-list">
          {fields.map((f) => (
            <div className="field-row" key={f.box}>
              <div className="field-box">Box {f.box}</div>
              <div className="field-info">
                <strong>{f.label}</strong>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="disclaimer">
          This is a simplified overview. Consult a tax professional for guidance
          on your specific K-1.
        </p>
      </div>
    </main>
  )
}
