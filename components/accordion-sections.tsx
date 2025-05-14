"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Calendar, FileText, Newspaper, Link2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
//import Link2 from "next/link"

// Updated projects data to match the two categories
const profiles = [
  {
    title: "Codeforces",
    link: "https://codeforces.com/profile/HarshBoghani",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/hr_boghani/",
  },
  {
    title: "AtCoder",
    link: "https://atcoder.jp/users/HarshBoghani",
  }
]

const projects = [
  { id: "main-projects", title: "Main Projects" },
  { id: "side-projects", title: "Side Projects" },
]

const blogs = [
  {
    date: "Dec 2, 2024",
    title: "All About Competitive Programming",
    link: "https://medium.com/@thrilled_bisque_gnu_255/all-about-competitive-programming-b8ee9e53d844",
  },
  {
    date: "Dec 12, 2024",
    title: "Exploring Prime Factorization and the Sieve of Eratosthenes in Number Theory",
    link: "https://medium.com/@thrilled_bisque_gnu_255/exploring-prime-factorization-and-the-sieve-of-eratosthenes-in-number-theory-934a363f4507",
  },
]

// const research = [
//   {
//     title: "Something related to EV Charging Infrastructure (Work in Progress)",
    
//   },
  
// ]

export function AccordionSections() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">


      <AccordionItem value="profiles" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("profiles") ? "rotate-90" : ""}`}
            />
            Profiles
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-3">
            {profiles.map((profile, index) => (
              <div key={index} className="flex items-start group">
                <Link 
                  href={profile.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Link2 className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {profile.title}
                  
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="projects" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("projects") ? "rotate-90" : ""}`}
            />
            Projects
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <Link
                  href={`/project/${project.id}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {project.title}
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      


      <AccordionItem value="blog" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("blog") ? "rotate-90" : ""}`}
            />
            Blogs
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex items-center text-gray-400 min-w-32">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
                <Link 
                  href={blog.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Newspaper className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {blog.title}
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* <AccordionItem value="research" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("research") ? "rotate-90" : ""}`}
            />
            Research
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-3">
            {research.map((paper, index) => (
              <div key={index} className="group">
                {paper.link ? (
                  <Link href={paper.link} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <FileText className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                    {paper.title}
                  </Link>
                ) : (
                  <div className="text-gray-300 flex items-center">
                    <FileText className="h-4 w-4 mr-2 opacity-70" />
                    {paper.title}
                  </div>
                )}
                {paper.publication && (
                  <p className="text-sm text-gray-500 ml-6 mt-1">{paper.publication}</p>
                )}
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  )
}

