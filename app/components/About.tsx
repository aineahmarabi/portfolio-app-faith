'use client'
import { useState } from 'react'
import Image from 'next/image'

type Tab = 'Certifications' | 'Experience' | 'Education' | 'Skills'

type TabItem = {
  title: string;
  desc?: string | React.ReactElement;
  issuer?: string;
  date?: string;
  credentialId?: string;
  link?: string;
}

type TabContent = {
  [K in Tab]: TabItem[];
}

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('Certifications')

  const tabContent: TabContent = {
    Certifications: [
        {
          title: 'Zoho CRM Admin Certification',
          issuer: 'Zoho',
          date: 'Issued Mar 2024 · Expires Mar 2026',
          credentialId: '',
          link: 'https://www.pdffiller.com/jsfiller-desk14/?flat_pdf_quality=high&isShareViaLink=1&requestHash=34da3cd1d6b6c636533c1bbcf5bb3ec72cfda7f9f967fec8c44ace382f1be348&lang=en&projectId=1710877425&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=true&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=false&routeId=4ca84542696e30cec7351f0507aaf66e#c288913557ae4dccab89a2e1b4823dbb'
        },
        {
          title: 'Cloud Intro',
          issuer: 'IBM',
          date: 'Issued Jan 2021',
          credentialId: '',
          link: 'https://www.credly.com/badges/ead84c30-671d-4ee4-9514-a828148d431e?source=linked_in_profile'
        },
        {
          title: 'CyberSecurity Institute Certified Instructor (CSIC)',
          issuer: 'IBM',
          date: 'Issued Apr 2020',
          credentialId: '',
          link: 'https://www.credly.com/badges/ead84c30-671d-4ee4-9514-a828148d431e?source=linked_in_profile'
        },
        {
          title: 'GIAC Secure Software Programmer - Java (GSSP - JAVA)',
          issuer: 'IBM',
          date: 'Issued Apr 2020',
          credentialId: '',
          link: 'https://www.credly.com/badges/f2100210-53df-4f6e-9afa-2448ece76d69?source=linked_in_profile'
        }
      ],
      Skills: [
        { title: 'Zoho Development', desc: 'Expertise in customizing and building applications within the Zoho ecosystem to streamline business operations.' },
        { title: 'Custom Integrations', desc: 'Seamless integration of Zoho applications with third-party systems to enable data synchronization and automation.' },
        { title: 'Zoho Training', desc: 'Comprehensive training sessions to help teams efficiently use Zoho tools and maximize productivity.' },
        { title: 'Project Management', desc: 'Effective planning, execution, and tracking of projects to ensure timely delivery and alignment with business goals.' },
      ],
      Experience: [
        { title: 'Apr 2024 - Present', desc: <span>Zoho Solutions Support, Sales and Project Management Lead at <i className="text-red-600">IKA360</i></span> },
        { title: 'Nov 2023 - Mar 2024', desc: <span>Zoho Development Team Lead at <i className="text-red-600">Redian Software</i></span> },
        { title: 'Dec 2022 - Oct 2023', desc: <span>Head of Product Experience at <i className="text-red-600">Redian Software</i></span> },
        { title: 'Sept 2022 - Nov 2022', desc: <span>Trainee Engineer at <i className="text-red-600">Redian Software</i></span> },
      ],
      Education: [
        { 
          title: '2019 - 2022', 
          desc: 'Bachelor of Technology in Information Technology',
        }
      ], 
  }

  const renderTabContent = () => {
    if (activeTab === 'Certifications') {
      return (
        <div className="space-y-8">
          {tabContent.Certifications.map((cert, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-400">{cert.issuer}</span>
              </div>
              <div className="flex-1">
                <h5 className="text-base font-medium text-white mb-1">{cert.title}</h5>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-gray-500 text-sm">Credential ID {cert.credentialId}</p>
                    )}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-600 hover:text-red-500"
                  >
                    Show credential →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activeTab === 'Skills') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tabContent.Skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900/50 p-5 rounded-lg border border-zinc-800 hover:border-red-600/50 transition-colors"
            >
              <h3 className="text-base font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      )
    }

    return (
      <div className="space-y-6">
        {tabContent[activeTab].map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="about" className="min-h-screen bg-black py-20 md:py-24">
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-7xl mx-auto h-full grid md:grid-cols-2 gap-12 md:items-center">
          {/* Image - Hidden on mobile */}
          <div className="hidden md:block relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/var-faith.jpg"
              alt="Faith Kajuju"
              fill
              className="object-cover"
            />
          </div>

          {/* Content - Full width on mobile */}
          <div className="w-full h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 px-2">
              <span className="text-red-600">About</span>
              <span className="text-white"> Me</span>
            </h2>
            <div className="mb-6 px-2">
              <p className="text-gray-300 text-justify text-sm md:text-base leading-relaxed">
                I am a dedicated Zoho solutions expert with over two years of experience designing and implementing customized business systems using the Zoho One ecosystem. As a certified Zoho Partner, I specialize in creating tailored solutions that streamline operations, enhance productivity, and meet the unique needs of clients across various industries, including real estate, corporate travel, and healthcare. My expertise spans CRM development, data migration, user training, and process optimization, with a proven track record of solving complex challenges, such as data formatting issues and workflow inefficiencies. Passionate about leveraging technology to transform businesses, I thrive on exploring the endless possibilities within Zoho&apos;s ecosystem to deliver innovative and impactful solutions.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-between px-2 mb-6">
              {(['Certifications', 'Experience', 'Skills', 'Education'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 relative text-sm md:text-base font-medium group ${
                    activeTab === tab ? 'text-red-600' : 'text-white hover:text-red-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab ? (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content with relative height and padding */}
            <div className="flex-1 overflow-y-auto min-h-[45vh] md:min-h-[40vh] px-2">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}