'use client';

import { PageLayout } from '@/components/layouts/page-layout'; // Ensure this is correct
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Ensure these paths are correct
import { Github, Mail } from 'lucide-react'; // Ensure correct icon imports

export default function DeveloperPage() {
  return (
    <PageLayout>
      <div className="container py-12 space-y-8">
        {/* Developer 1 */}
        <section className="space-y-8">
          <div className="space-y-4 flex items-center space-x-6">
            {/* Profile Photo for Developer 1 */}
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="ARJUN"
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold">A R J U N</h1>
              <p className="text-xl text-muted-foreground">Backend Developer</p>
              <p className="max-w-2xl">
                Arjun is a passionate and skilled Backend Developer with a
                strong background in building scalable web applications and
                solving complex technical challenges. With expertise in modern
                technologies like React, Node.js, TypeScript, and Python, He is
                committed to delivering high-quality software solutions.
              </p>
            </div>
          </div>

          {/* Skills for Developer 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>PHP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>React/Next.js</li>
                    <li>Node.js/Express</li>
                    <li>Django</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Git</li>
                    <li>Docker</li>

                    <li>Linux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Databases</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Projects for Developer 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold">FeedsGram</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A Telegram bot platform for business automation and customer
                  engagement. Built with Next.js, Node.js, and MongoDB.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">ByteWaveGram</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A Telegram bot platform with robust high performence app to
                  make telegram usage easier.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Get in Touch for Developer 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Arjun-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="mailto:am.mail.to@gmail.com"
                  className="p-2 rounded-full hover:bg-accent"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <hr className="my-8 border-t-2 border-gray-300" />

        {/* Developer 2 */}
        <section className="space-y-8">
          <div className="space-y-4 flex items-center space-x-6">
            {/* Profile Photo for Developer 2 */}
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Jane Doe"
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold">Mrunal</h1>
              <p className="text-xl text-muted-foreground">Backend Developer</p>
              <p className="max-w-2xl">
                Experienced backend developer with a focus on building robust
                and scalable server-side applications. Specializes in Python,
                RESTful APIs, and telethon design.
              </p>
            </div>
          </div>

          {/* Skills for Developer 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Python</li>
                    <li>Go</li>
                    <li>Ruby</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Telethon/Aiogram</li>
                    <li>Ruby on Rails</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>CI/CD</li>
                    <li>Linux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Databases</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Projects for Developer 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold">TaskMaster</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A task management application with real-time collaboration.
                  Built with Python and MongoDB.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Inventory Tracker</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A system for managing stock and inventory for small
                  businesses. Built using Ruby on Rails and PostgreSQL.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Get in Touch for Developer 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a
                  href="https://github.com/msy1717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-full hover:bg-accent"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
}
