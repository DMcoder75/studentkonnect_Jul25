import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Calendar, Mail } from 'lucide-react'
import Sidebar from './Sidebar'

export default function TermsOfServicePage({ isMobileMenuOpen, onMobileMenuClose }) {
  return (
    <div className="w-full">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileMenuClose}
        />
      )}

      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-16 w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Please read these terms carefully before using YourUniPathway.com
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Last updated: 18-Jul-2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout Starts Here */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={onMobileMenuClose}
        />

        {/* Main Content */}
        <main className="flex-1 w-full md:w-auto transition-all duration-300">
          {/* Terms Content */}
          <div className="max-w-4xl mx-auto px-6 py-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to YourUniPathway.com ("we", "us", "our", or "the Website"). Please read these Terms of Service ("Terms") carefully before using our website, applications, content, tools, or any services offered (collectively, the "Service"). Your use of the Service signifies that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, do not use the Service.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">1</Badge>
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing or using YourUniPathway.com in any manner—whether as a visitor, registered user, or contributor—you ("you", "user", or "visitor") represent that you have read, understood, and agree to be legally bound by these Terms of Service. Your continued use of the Service following any modifications to these Terms constitutes your acceptance of the new Terms. These Terms apply to all users of the Service, including users who are contributors of content, information, or other materials.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">2</Badge>
                    Educational Purpose Only
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YourUniPathway.com is an informational platform to assist users in exploring educational opportunities, subject choices, tertiary pathways, and related resources. All content, pathways, advice, recommendations, and tools provided on this site are for general informational and educational purposes only.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>We do not provide professional, academic, legal, counseling, or financial advice.</li>
                    <li>We cannot and do not guarantee the accuracy, completeness, timeliness, or applicability of any information or data provided, whether generated by us, derived from others, or submitted by users.</li>
                    <li>Any decisions made based on materials found on this Service are solely at your own risk.</li>
                    <li>You should seek independent academic and professional advice before making any decisions relating to universities, courses, or careers.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">3</Badge>
                    User Conduct
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. As a condition of your use, you agree that you will NOT:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Access, submit, or transmit content that is false, misleading, unlawful, offensive, abusive, threatening, harassing, defamatory, obscene, or otherwise objectionable.</li>
                    <li>Attempt to gain unauthorized access to any aspect of the Service, user accounts, servers, or networks connected to the Service, including circumventing, disabling, or otherwise interfering with security features.</li>
                    <li>Use automated means (bots, scripts, spiders) to access, copy, scrape, or index any portion of the Service without express written permission.</li>
                    <li>Transmit any code, files, or software designed to interrupt, destroy, or limit the functionality of any software, hardware, or telecommunications equipment.</li>
                    <li>Upload or transmit viruses, malware, or any other technologies harmful to the Website or its users.</li>
                    <li>Use the Service to promote or solicit goods or services, or for any commercial or unauthorized advertising purpose.</li>
                    <li>Infringe the rights of any third party, including intellectual property, privacy, or contractual rights.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right, without liability or prejudice, to suspend or terminate your use of the Service if, in our sole judgment, you violate these Terms or any applicable law.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">4</Badge>
                    Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unless otherwise noted, all content—such as software, design elements, code, text, images, graphics, photographs, videos, logos, information, and other materials—available through YourUniPathway.com is the property of YourUniPathway.com, its licensors, or content providers, and is protected by copyright, trademark, and other Australian and international laws.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You may not (except as expressly authorised by us in writing):
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Copy, reproduce, modify, adapt, publish, transmit, distribute, perform, display, create derivative works, sell, or participate in the sale of, or exploit in any way, in whole or in part, any content from the Service.</li>
                    <li>Use any of our trade names, trademarks, service marks, logos, or related images without our prior written consent.</li>
                    <li>Download, copy, or share content except for personal, non-commercial, informational, and educational use, provided you do not remove any copyright or proprietary notices.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve all rights not expressly granted herein.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">5</Badge>
                    User-Generated Content
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YourUniPathway.com may enable you to post, upload, submit, or otherwise share content (including but not limited to questions, comments, ratings, reviews, or profile information).
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Responsibility:</h3>
                      <p className="text-gray-700 leading-relaxed">You remain solely responsible for any content you contribute and warrant that you have all rights and permissions to share such content.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Appropriateness:</h3>
                      <p className="text-gray-700 leading-relaxed">You warrant that your content does not violate any law or the rights of others (including copyright, privacy, or confidentiality).</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Licence:</h3>
                      <p className="text-gray-700 leading-relaxed">By submitting content to the Service, you grant us an irrevocable, non-exclusive, perpetual, transferable, worldwide, royalty-free licence (with the right to sublicense) to use, display, modify, adapt, publish, reproduce, transmit, create derivative works from, and otherwise exploit such content in all formats and media now known or developed in the future, for any purpose related to the operation, improvement, or promotion of the Website (including marketing/social media).</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Monitoring and Removal:</h3>
                      <p className="text-gray-700 leading-relaxed">We have the right, but not the obligation, to review, monitor, remove, or edit user-generated content at our sole discretion and without notice.</p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">6</Badge>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>The Service is provided "AS IS", "AS AVAILABLE", and without any warranties, guarantees, conditions or representations of any kind, whether express, implied, statutory, or otherwise, including but not limited to merchantability, fitness for a particular purpose, completeness, reliability, accuracy, or non-infringement.</li>
                    <li>YourUniPathway.com, its owners, directors, officers, employees, contractors, agents, affiliates, or licensors shall NOT be liable for any direct, indirect, punitive, incidental, special, exemplary, or consequential damages, losses, claims, or costs of any kind arising under or related to your access to or use, or inability to use the Service, or for errors, inaccuracies, or omissions in the content—even if we have been advised of the possibility of such damages.</li>
                    <li>Without limiting the generality of the above, we accept no liability whatsoever for any loss, injury, delay, or damage arising in connection with any reliance on information provided on this site, decisions made based on pathways or recommendations, or application outcomes with universities or institutions.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Some jurisdictions do not allow certain exclusions or limitations of liability, so these limitations may not apply in full in those regions.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">7</Badge>
                    Third-Party Links & Content
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>YourUniPathway.com may contain links or references to third-party websites, services, or resources not owned or controlled by us.</li>
                    <li>We do not endorse, guarantee, or take responsibility for any third-party content, products, services, or practices.</li>
                    <li>Accessing any third-party website is done at your own risk; we recommend reviewing their terms and privacy policies.</li>
                    <li>We accept no responsibility or liability for any damage, loss, or harm connected to third-party sites, services, or their content.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">8</Badge>
                    Indemnification
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to indemnify, defend, and hold harmless YourUniPathway.com, its owners, directors, staff, affiliates, and licensors from and against any and all claims, losses, expenses, damages, fines, penalties, liabilities, and costs (including reasonable legal fees), resulting from, arising out of, or in connection with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Your use (or misuse) of the Service,</li>
                    <li>Your violation of these Terms,</li>
                    <li>Your violation of any law or rights of any third party,</li>
                    <li>Any content you contribute or actions you take on the Service.</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">9</Badge>
                    Changes, Modifications, and Termination
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>We reserve the right, at our sole discretion, to change, amend, modify, update, suspend, or discontinue all or part of the Service (including these Terms, features, content, or availability) at any time, with or without notice.</li>
                    <li>Continued use of the Service after such changes constitutes your acceptance of the new Terms.</li>
                    <li>We also reserve the right to terminate or suspend your account or access to all or part of the Service at any time, for any reason, and without liability to you.</li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">10</Badge>
                    Governing Law & Dispute Resolution
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>These Terms and your relationship with YourUniPathway.com are governed in all respects by the laws of the State of Victoria, Australia, without regard to its conflict of laws principles.</li>
                    <li>Any dispute arising under or related to these Terms or the Service will be subject to the exclusive jurisdiction of the courts located in Victoria, Australia.</li>
                    <li>If any provision of these Terms is found to be invalid or unenforceable, such provision will be severed and the remainder of the Terms will continue in full force and effect.</li>
                  </ul>
                </div>

                {/* Section 11 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge variant="outline" className="mr-3">11</Badge>
                    Contact & Questions
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For any questions regarding these Terms, please contact us at:
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:contact@yourunipathway.com" className="hover:underline">
                      contact@yourunipathway.com
                    </a>
                  </div>
                </div>

                {/* Final Statement */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <p className="text-blue-800 font-medium text-center">
                    By using this website, you confirm that you have read, understood, and agreed to all the Terms outlined above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

