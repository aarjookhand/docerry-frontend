import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import PricingPlans from '../components/PricingPlans'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />
      <div className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Docerry
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Where innovation meets collaboration!
        </p>
        <div className="text-left space-y-6 text-gray-800">
          <p>
            Say hello to your team’s ultimate partner in building and maintaining a dynamic knowledge base. Designed for today’s agile teams, our platform turns documenting, searching, and sharing technical solutions into a seamless and rewarding experience.
          </p>
          <p>
            At Docerry, we don’t just simplify workflows—we empower teams to shine. Whether you’re tackling complex errors, capturing best practices, or fostering cross-department collaboration, our platform keeps your organization’s knowledge at your fingertips—structured, accessible, and always evolving.
          </p>
          <p className="font-semibold text-gray-900 text-lg mt-6">
            Ready to take your teamwork to the next level? Let’s build smarter, together!
          </p>
        </div>
      </div>
      <PricingPlans />
    </div>
  )
}
