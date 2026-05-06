import './Page.css'

const fields = [
  { box: '1', label: 'Wages, Tips, Other Compensation', description: 'Total taxable wages paid to you before any deductions.' },
  { box: '2', label: 'Federal Income Tax Withheld', description: 'Amount your employer sent to the IRS on your behalf.' },
  { box: '3', label: 'Social Security Wages', description: 'Wages subject to Social Security tax (capped annually by the IRS).' },
  { box: '4', label: 'Social Security Tax Withheld', description: 'Social Security tax withheld — should be 6.2% of Box 3.' },
  { box: '5', label: 'Medicare Wages and Tips', description: 'Wages subject to Medicare tax. No wage cap applies.' },
  { box: '6', label: 'Medicare Tax Withheld', description: 'Medicare tax withheld — should be 1.45% of Box 5.' },
  { box: '12', label: 'Codes (401k, HSA, etc.)', description: 'Various deductions and benefits using IRS letter codes (e.g., D = 401k contributions).' },
  { box: '17', label: 'State Income Tax', description: 'State income tax withheld by your employer.' },
]

export default function W2() {
  return (
    <main className="page">
      <div className="page-content">
        <h1>Form W-2</h1>
        <p className="page-subtitle">
          Your W-2 is issued by your employer and reports annual wages and the
          amount of taxes withheld. You need it to file your federal and state
          tax returns.
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
          on your specific W-2.
        </p>
      </div>
    </main>
  )
}
