"use client";
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'What is KITA and how does it work?',
    a: 'KITA is a social platform designed to connect people who are traveling to the same destinations or looking to participate in group activities. Users can browse available trips or events based on location, dates, and interests. Additionally, users can create and host their own trips or events by providing details and inviting others to join or approving requests from potential participants.',
  },
  {
    q: 'How do I create a KITA account?',
    a: 'Download the KITA app from the App Store or Google Play.\n• Tap "Sign Up" and provide your name, email address, and create a password.\n• Upload your KYC details (government-issued documents like AADHAR, PAN, or Driver’s License).\n• Complete a Face ID scan for additional security.\n• If you\'re a male user, you\'ll need an invitation code from a female user.\n• A female user can invite up to 3 male users free of cost.\n• Verify your phone number by entering the OTP we send to you.',
  },
  {
    q: 'What is the “Verified ID” system and why is it important?',
    a: 'The Verified ID system allows us to confirm each user\'s identity using government-issued documents. This ensures that everyone on the platform is who they claim to be, fostering trust and safety among users. By having a verified ID, you can confidently connect with others for trips or events, knowing that your fellow participants are legitimate. To request verification, simply visit your profile settings under Safety & Verification.',
  },
  {
    q: 'How do I find trips or events to join?',
    a: '• Open the search menu in the app.\n• Use the filters to search by destination, date range, and specific interests (e.g., hiking, concerts, culinary tours).\n• Browse through the available trips or events that match your preferences.\n• Tap the like button on any trip or event you\'re interested in to request to join. The host will review your profile and either approve or decline your request.',
  },
  {
    q: 'How do I host a trip or event?',
    a: '• Go to the "Trips" section on the bottom navigation bar and tap on the "Create Trip or Event" button.\n• Fill in the details of your trip or event, such as destination, dates, activities, group size, and any associated costs.\n• Publish your trip or event. Once published, individuals can request to join, and you can approve or decline their requests.',
  },
  {
    q: 'What safety features does KITA offer?',
    a: '• Verified ID: Confirms user identities through government-issued documents to build trust.\n• SOS Button: Sends your real-time location to your designated emergency contacts in case of an emergency.\n• In-App Chat Moderation: Monitors messages to detect and prevent abuse, harassment, or inappropriate content.\n• Ratings & Reviews: After each trip or event, both hosts and participants can rate each other, ensuring accountability and transparency.',
  },
  {
    q: 'How do I use the SOS button?',
    a: '• Open the KITA app home screen.\n• Tap the SOS icon located in the top-right corner of the screen.\n• The app will immediately send a distress message with your real-time location to your designated emergency contacts.',
  },
  {
    q: 'How does in-app chat work?',
    a: '• Once you like an event or trip and receive approval from the host, you are added to a group chat where you can communicate with the host and other participants.\n• Note: If the multi-text option is enabled by the host, only other participants can message in the group chat.\n• Chats are encrypted end-to-end, ensuring privacy and security.\n• You can report any inappropriate behavior by tapping the ••• in the chat and selecting Report.',
  },
  {
    q: 'Can I edit or cancel a trip I’m hosting?',
    a: 'You cannot edit a trip once it has been posted. However, if you wish to delete the trip or event, simply open the event details and click on the delete (dustbin) icon to remove it.',
  },
  {
    q: 'Can a host provide instructions or disclaimers for their trip or event?',
    a: 'Yes, hosts can include specific instructions or disclaimers within the trip or event details to ensure participants are informed about important guidelines or conditions before joining.',
  },
  {
    q: 'What information is visible on my public profile?',
    a: 'Your public profile shows:\n• Display name and profile photo\n• Bio and travel interests\n• Trip history (past trips, ratings received)\n• “Verified ID” badge (if verified)\n• Aggregate rating score from other users',
  },
  {
    q: 'How is my personal data handled?',
    a: 'KITA collects only the data necessary to operate safely and effectively. Your personal data is securely stored and encrypted to protect your privacy. For complete details on how we manage your data, please refer to our Privacy Policy.',
  },
  {
    q: 'What happens if a user violates community guidelines?',
    a: 'Violations such as harassment, fraud, or safety risks may result in the following actions:\n• Warning — For minor first-time offenses.\n• Temporary Suspension — For repeated or serious infractions.\n• Permanent Ban — For severe violations, such as violence or identity fraud.\n• All actions will be documented, and users may submit an appeal via Help & Support.\n• Additionally, KITA reserves the right to bypass the standard sequence of actions and delete the profile at its discretion.',
  },
  {
    q: 'How do I report a safety concern or incident?',
    a: '• Go to the profile of the host or individual involved and tap the ••• button.\n• Select Report and fill in the incident details.\n• KITA’s Safety Team will investigate the matter and follow up accordingly.',
  },
  {
    q: 'Can I share trip details outside of the app?',
    a: 'Yes, you can. On any trip or event page, tap the Share button to copy a link or send it via social media or messaging apps. Please note, recipients will need to download the KITA app to view full trip details and request to join.',
  },
  {
    q: 'How do ratings and reviews work?',
    a: 'After each trip or event ends, both hosts and participants can rate each other using emojis and leave optional written feedback. These ratings build transparency and help future users evaluate trust, safety, and compatibility before joining or accepting requests.',
  },
  {
    q: 'Where can I get more help?',
    a: 'Visit Help & Support in the app or email us at officialkita.app@gmail.com. We aim to respond to all inquiries within 48 hours.',
  },
  {
    q: 'Are there costs to join a trip?',
    a: 'Trip costs are set by the host and may vary. Always clarify payment terms directly with the host through in-app chat. KITA does not manage or facilitate any financial transactions and is not involved in payment disputes.',
  },
  {
    q: 'Is KITA liable for incidents during trips or events?',
    a: 'While KITA takes user safety seriously and provides tools like SOS and reporting features, all interactions and participation in trips or events are done at your own discretion and risk. KITA is not responsible or liable for any incidents, losses, or mishaps that occur during these activities. Always prioritize your personal safety and report concerns promptly.',
  },
  {
    q: 'Can I block or report another user?',
    a: 'Yes. Simply tap the ••• menu on any user’s profile or within a chat thread, then select Block or Report.\n• Blocking prevents the user from messaging you or sending join requests.\n• Reporting alerts KITA’s moderation team to review the issue and take appropriate action based on our community guidelines.',
  },
  {
    q: 'Can I add photos or videos to my trip or event itinerary?',
    a: 'Yes. When hosting a trip or event, tap the Add Media button to upload up to 20 images or 2 videos (each up to 100 MB). This helps showcase your planned activities and attract like-minded individuals to join.',
  },
  {
    q: 'How does the invitation process to join KITA work?',
    a: 'Each verified female user receives 3 invite codes that can be shared with male users. These codes allow male users to sign up and create a profile. Once used, the invitation becomes invalid. This system helps maintain a balanced and trusted community environment on KITA.',
  },
  {
    q: 'What are my responsibilities as a trip host?',
    a: 'As a host on KITA, you are expected to:\n• Provide accurate and honest trip or event details, including destination, dates, activities, and any costs.\n• Communicate promptly and respectfully with all participants.\n• Fulfill any commitments made in the trip description, such as accommodations, experiences, or transportation (if applicable).\n• Ensure the safety and well-being of participants and comply with local laws and regulations throughout the trip or event.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
   <section className="bg-[#0e3c39] text-white py-16 px-6">
  <div className="max-w-3xl mx-auto">
    {/* headline */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {faqs.map(({ q, a }, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="border border-white/20 rounded-lg shadow-sm"
          >
            {/* question row */}
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left p-4 md:p-5 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`faq-ans-${idx}`}
            >
              <span className="font-semibold text-white">{q}</span> {/* ← white text */}
              {isOpen ? (
                <FiMinus className="w-5 h-5 text-[#ED6D24]" /> // footer-orange
              ) : (
                <FiPlus className="w-5 h-5 text-[#ED6D24]" />
              )}
            </button>

            {/* answer body */}
            {isOpen && (
              <div
                id={`faq-ans-${idx}`}
                className="px-4 pb-5 md:px-5 text-white whitespace-pre-line"
              >
                {a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}