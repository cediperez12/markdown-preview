import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState(
    '![image](https://images2.alphacoders.com/122/thumb-1920-1223610.jpg)\n ## Jenna Ortega\n > Cutiepie'
  )

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
