import reactLogo from './assets/react.svg'
import afLogo from './assets/afLogo.svg'
import afMark from './assets/afMark.svg'
import plusIcon from './assets/plus.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  return (
    <main>
      <div className="hero-top">
        <img src={afLogo} style={{ height: 87 }} />
        <img src={plusIcon} />
        <img src={reactLogo} style={{ height: 87 }} />
      </div>
      <p className='description'>
        This is a template for creating a React site build it with Vite and deploying it on AlternateFutures.
      </p>
      <ul role="list" className='card-list'>
        <Card
          icon={afMark}
          width={31}
          href="https://docs.alternatefutures.ai/"
          title="AlternateFutures Documentation"
          body="Learn about AlternateFutures & the available services by checking our official docs."
        />

        <Card
          icon={reactLogo}
          width={31}
          href="https://react.dev/"
          title="React Documentation"
          body="Learn about React in their official docs."
        />

        <Card
          icon={afMark}
          width={31}
          href="https://blog.alternatefutures.ai/"
          title="AlternateFutures Blog"
          body="Checkout our Blog for more information about AlternateFutures."
        />

        <Card
          icon={viteLogo}
          width={31}
          href="https://vitejs.dev/guide/"
          title="Vite Documentation"
          body="Learn about Vite & how it can bring you a modern development experience."
        />
      </ul>
    </main >
  )
}

type CardProps = {
  title: string;
  body: string;
  href: string;
  icon: string;
  width: number;
}

function Card({ title, width, body, href, icon }: CardProps) {
  return (
    <li className='card'>
      <a href={href}>
        <div className='card-top-row'>
          <img
            alt='card-icon'
            style={{ height: 31, width }}
            src={icon}
          />
          <h2>
            {title}
          </h2>
        </div>
        <p>
          {body}
        </p>
      </a>
    </li>
  )
}

export default App
