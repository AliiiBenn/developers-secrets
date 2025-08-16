import { CssLogoIcon } from '@/components/icons/css-logo-icon'
import { DjangoLogoIcon } from '@/components/icons/django-logo-icon'
import { FastApiLogoIcon } from '@/components/icons/fastapi-logo-icon'
import { GoLogoIcon } from '@/components/icons/go-logo-icon'
import { GraphQLLogoIcon } from '@/components/icons/graphql-logo-icon'
import { HtmlLogoIcon } from '@/components/icons/html-logo-icon'
import { JsLogoIcon } from '@/components/icons/js-logo-icon'
import { NextjsLogoIcon } from '@/components/icons/nextjs-logo-icon'
import { PostgreSqlLogoIcon } from '@/components/icons/postgresql-logo-icon'
import { PythonLogoIcon } from '@/components/icons/python-logo-icon'
import { ReactLogoIcon } from '@/components/icons/react-logo-icon'
import { ReactRouterLogoIcon } from '@/components/icons/react-router-logo-icon'
import { TailwindLogoIcon } from '@/components/icons/tailwind-logo-icon'
import { TypescriptLogoIcon } from '@/components/icons/typescript-logo-icon'
import { VueLogoIcon } from '@/components/icons/vue-logo-icon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface Integration {
  id: string
  icon: React.ReactNode
  name?: string
}

interface Hero32Props {
  heading?: string
  description?: string
  button?: {
    text: string
    url: string
  }
  integrations?: Integration[][]
}

export const HeroSection = ({
  heading = 'Become a real software engineer. Or stay stuck shipping toy projects.',
  description = 'Discover our interactive fullstack development learning platform. Master the most in-demand technologies through practical coding challenges and structured progression.',
  button = {
    text: 'Start Learning',
    url: '/auth/signup',
  },
  integrations = [
    [
      {
        id: 'integration-1',
        icon: <PythonLogoIcon className="h-full w-full" />,
        name: 'Python',
      },
      {
        id: 'integration-2',
        icon: <ReactLogoIcon className="h-full w-full" />,
        name: 'React',
      },
      {
        id: 'integration-3',
        icon: <NextjsLogoIcon className="h-full w-full" />,
        name: 'Next.js',
      },
      {
        id: 'integration-4',
        icon: <HtmlLogoIcon className="h-full w-full" />,
        name: 'HTML5',
      },
      {
        id: 'integration-5',
        icon: <CssLogoIcon className="h-full w-full" />,
        name: 'CSS3',
      },
    ],
    [
      {
        id: 'integration-6',
        icon: <JsLogoIcon className="h-full w-full" />,
        name: 'JavaScript',
      },
      {
        id: 'integration-7',
        icon: <TypescriptLogoIcon className="h-full w-full" />,
        name: 'TypeScript',
      },
      {
        id: 'integration-8',
        icon: <DjangoLogoIcon className="h-full w-full" />,
        name: 'Django',
      },
      {
        id: 'integration-9',
        icon: <FastApiLogoIcon className="h-full w-full" />,
        name: 'FastAPI',
      },
      {
        id: 'integration-10',
        icon: <TailwindLogoIcon className="h-full w-full" />,
        name: 'Tailwind CSS',
      },
    ],
    [
      {
        id: 'integration-11',
        icon: <GoLogoIcon className="h-full w-full" />,
        name: 'Go',
      },
      {
        id: 'integration-12',
        icon: <VueLogoIcon className="h-full w-full" />,
        name: 'Vue.js',
      },
      {
        id: 'integration-13',
        icon: <PostgreSqlLogoIcon className="h-full w-full" />,
        name: 'PostgreSQL',
      },
      {
        id: 'integration-14',
        icon: <ReactRouterLogoIcon className="h-full w-full" />,
        name: 'React Router',
      },
      {
        id: 'integration-15',
        icon: <GraphQLLogoIcon className="h-full w-full" />,
        name: 'GraphQL',
      },
    ],
  ],
}: Hero32Props) => {
  const leftIcons = integrations.map((line) => line.slice(0, 2))
  const rightIcons = integrations.map((line) => line.slice(2))

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
          className="opacity-10 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 z-10 flex w-1/4 flex-col items-start pt-32 gap-16 overflow-hidden pl-12 opacity-30">
          {leftIcons.map((line, i) => (
            <div key={`left-${i}`} className="flex gap-x-22 odd:-translate-x-11">
              {line.map((integration) => (
                <div key={integration.id} className="size-22 rounded-xl bg-muted shadow-xl">
                  <div className="h-full w-full bg-muted/20 p-4">{integration.icon}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 z-10 flex w-1/4 flex-col items-end pt-32 gap-16 overflow-hidden pr-12 opacity-30">
          {rightIcons.map((line, i) => (
            <div key={`right-${i}`} className="flex gap-x-22 odd:translate-x-11">
              {line.map((integration) => (
                <div key={integration.id} className="size-22 rounded-xl bg-muted shadow-xl">
                  <div className="h-full w-full bg-muted/20 p-4">{integration.icon}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="relative flex flex-col items-center justify-center md:px-24 mx-auto">
          <div className="z-20 -mx-4 w-full shrink-0 bg-background px-4 pt-32 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-2 text-sm pr-4 pl-1 py-1 rounded-full gap-2">
                  <Badge className="rounded-full bg-primary/10 border-primary/20 text-primary">
                    New
                  </Badge>
                  Join our free alpha version!
                </Badge>
                <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">{heading}</h1>
                <p className="text-muted-foreground">{description}</p>
                <Button asChild size="lg" className="mt-10">
                  <a href={button.url}>{button.text}</a>
                </Button>
              </div>
              <div className="mt-12">
                <Image
                  src="/dashboard-image.png"
                  alt="Dashboard preview"
                  width={1100}
                  height={700}
                  className="rounded-lg border shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
