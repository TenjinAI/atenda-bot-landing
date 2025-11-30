import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { promises as fs } from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

// Function to generate ID from heading text (preserving Portuguese characters)
function generateId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-záàâãéêíóôõúçü0-9-]/g, '') // Keep Portuguese characters and remove others
}

export default async function PoliticaDePrivacidade() {
  const markdownPath = path.join(process.cwd(), 'public/docs/privacy-policy.md')
  const markdownContent = await fs.readFile(markdownPath, 'utf-8')

  // Custom components for headings with IDs and scroll margin for fixed header
  const components: Components = {
    h1: ({ children }) => {
      const text = String(children)
      const id = generateId(text)
      return <h1 id={id} className="scroll-mt-24">{children}</h1>
    },
    h2: ({ children }) => {
      const text = String(children)
      const id = generateId(text)
      return <h2 id={id} className="scroll-mt-24">{children}</h2>
    },
    h3: ({ children }) => {
      const text = String(children)
      const id = generateId(text)
      return <h3 id={id} className="scroll-mt-24">{children}</h3>
    },
    h4: ({ children }) => {
      const text = String(children)
      const id = generateId(text)
      return <h4 id={id} className="scroll-mt-24">{children}</h4>
    },
  }

  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-32">
          <article className="prose prose-slate prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h4:text-xl prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 max-w-none scroll-smooth">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {markdownContent}
            </ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}


