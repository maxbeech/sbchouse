'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ArrowLeftIcon, ShareIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Define the NewsArticle interface to match the one in the main news page
interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  content?: string; // Adding content for the full article
}

export default function NewsArticlePage() {
  const params = useParams();
  const articleId = params.id as string;
  
  // This would typically come from a database or API
  // For now, we'll hard-code the articles to match the ones in the news page
  const newsArticles: NewsArticle[] = [
    {
      id: 'summer-holiday-club',
      title: 'Summer Holiday Club Booking Now Open',
      date: 'May 15, 2024',
      excerpt: 'Secure your child\'s place in our action-packed summer holiday club with exciting activities, outdoor adventures, and creative fun. Early bird discounts available until June 15th!',
      image: '/media/484871687_1066676745504882_7776977396599937926_n.jpg',
      category: 'holiday-club',
      content: `
        <p>We're excited to announce that bookings for our Summer Holiday Club 2024 are now open!</p>
        
        <p>Our popular holiday club provides a fun, safe, and stimulating environment for children aged 4-11 during the summer break. Each week features a different exciting theme with a variety of activities including:</p>
        
        <ul>
          <li>Outdoor sports and adventure play</li>
          <li>Arts and crafts projects</li>
          <li>Science experiments and discovery</li>
          <li>Drama and music workshops</li>
          <li>Special guests and entertainers</li>
          <li>Field trips to local attractions</li>
        </ul>
        
        <p>This year's themes include "Space Explorers," "Animal Adventure," "Sports Spectacular," "Creative Arts," "Science Discovery," and "World Cultures."</p>
        
        <p>The holiday club runs from July 22nd to August 30th, Monday to Friday, 8:00 AM to 6:00 PM. You can book full weeks or individual days to suit your family's schedule.</p>
        
        <h3>Early Bird Discount</h3>
        <p>Book and pay by June 15th to receive our early bird discount of 10% off the total booking cost. This is a significant saving, especially for multiple weeks or siblings.</p>
        
        <h3>How to Book</h3>
        <p>To secure your child's place, please complete the booking form available on our website or at the reception desk. Payment is required at the time of booking to confirm your reservation.</p>
        
        <p>Spaces fill quickly, so we recommend booking early to avoid disappointment. If you have any questions about our Summer Holiday Club, please don't hesitate to contact us.</p>
        
        <p>We look forward to providing your child with a memorable summer full of fun and adventure at Bisley Base!</p>
      `
    },
    {
      id: 'preschool-open-day',
      title: 'Preschool Open Day Announced',
      date: 'April 30, 2024',
      excerpt: 'Join us for our upcoming Open Day on Saturday, June 8th to tour our facilities, meet our qualified staff, and learn about our preschool curriculum. Registration required.',
      image: '/media/484902036_1066676725504884_4700747617186550414_n.jpg',
      category: 'events',
      content: `
        <p>We're delighted to invite families to our Preschool Open Day on Saturday, June 8th, 2024, from 10:00 AM to 2:00 PM.</p>
        
        <p>This is a perfect opportunity for parents and children to explore our preschool facilities, meet our dedicated teaching team, and learn about our curriculum and approach to early childhood education.</p>
        
        <h3>What to Expect</h3>
        <ul>
          <li>Guided tours of our preschool classrooms and outdoor play areas</li>
          <li>Meet and greet with our qualified early years educators</li>
          <li>Interactive activity stations for children to experience our learning approach</li>
          <li>Information about our curriculum, daily schedule, and educational philosophy</li>
          <li>Details about enrollment options, fees, and available schedules</li>
          <li>Refreshments and a small gift for attending families</li>
        </ul>
        
        <p>During the Open Day, we'll showcase how our play-based curriculum supports children's development across all key areas: physical, social, emotional, and cognitive. You'll see examples of projects and activities that foster creativity, curiosity, and a love of learning.</p>
        
        <h3>Registration Required</h3>
        <p>To ensure we can provide a quality experience for all visitors, registration is required for this event. Please register by June 1st by completing the form on our website or contacting our office directly.</p>
        
        <p>When registering, please let us know how many adults and children will be attending, and the ages of the children. This helps us prepare appropriate activities and information.</p>
        
        <h3>Enrollment Opportunities</h3>
        <p>For families interested in enrolling for the upcoming academic year, we'll be offering special incentives for registrations completed on the Open Day, including waived registration fees.</p>
        
        <p>We have limited spaces available for children aged 2-4 years, with flexible attendance options including full-day and half-day sessions.</p>
        
        <p>We look forward to welcoming you to Bisley Base Preschool and showing you why our program is the perfect start to your child's educational journey!</p>
      `
    },
    {
      id: 'forest-school-activities',
      title: 'New Forest School Activities Launch',
      date: 'April 12, 2024',
      excerpt: 'We\'re excited to introduce new forest school activities to our curriculum, fostering outdoor learning and exploration. Our staff have completed specialized training to deliver this program.',
      image: '/media/484918616_1066676722171551_1681522475451576546_n.jpg',
      category: 'updates',
      content: `
        <p>We are thrilled to announce the launch of our expanded Forest School program at Bisley Base, bringing a new dimension to outdoor learning for all our children.</p>
        
        <p>Following extensive specialized training for our staff, we've developed an engaging curriculum that connects children with nature while developing important skills and confidence.</p>
        
        <h3>What is Forest School?</h3>
        <p>Forest School is an educational approach that uses woodland environments to build independence and self-esteem through hands-on learning experiences in a natural setting. This child-led approach supports play, exploration, and appropriate risk-taking, helping children develop confidence and creativity.</p>
        
        <h3>Our New Activities</h3>
        <p>Our expanded Forest School program includes a variety of engaging activities such as:</p>
        <ul>
          <li>Nature exploration and identification</li>
          <li>Safe tool use for creating woodland crafts</li>
          <li>Shelter building and outdoor survival skills</li>
          <li>Natural art and creative expression</li>
          <li>Seasonal observations and weather studies</li>
          <li>Outdoor cooking experiences</li>
          <li>Storytelling and imaginative play in natural settings</li>
        </ul>
        
        <h3>Staff Training</h3>
        <p>Five members of our team have now completed Forest School Leader training, giving them specialized knowledge in outdoor education, risk assessment, and facilitating nature-based learning. This ensures all activities are not only fun but also safe and developmentally appropriate.</p>
        
        <h3>Benefits for Children</h3>
        <p>Research has shown that Forest School activities offer numerous benefits for children's development, including:</p>
        <ul>
          <li>Improved physical health and coordination</li>
          <li>Enhanced communication and social skills</li>
          <li>Increased confidence and self-esteem</li>
          <li>Better concentration and problem-solving abilities</li>
          <li>Greater environmental awareness and respect for nature</li>
          <li>Reduced stress and improved emotional wellbeing</li>
        </ul>
        
        <h3>Implementation Timeline</h3>
        <p>The new Forest School activities will be gradually introduced into our programs starting April 15th. All age groups will participate, with activities appropriately tailored to each developmental stage.</p>
        
        <p>We're excited to embark on this journey of outdoor learning and can't wait to see the positive impact it will have on the children in our care. If you have any questions about our Forest School program, please don't hesitate to speak with any member of our team.</p>
      `
    },
    {
      id: 'staff-training-day',
      title: 'Staff Training Day - June 3rd Closure',
      date: 'April 5, 2024',
      excerpt: 'Please note that Bisley Base will be closed on Monday, June 3rd for our annual staff training day. We apologize for any inconvenience and thank you for your understanding.',
      image: '/media/484902934_1066676832171540_4221519586243368102_n.jpg',
      category: 'updates',
      content: `
        <p>We would like to inform all parents and guardians that Bisley Base will be closed on Monday, June 3rd, 2024, for our annual staff training day.</p>
        
        <h3>Importance of Staff Training</h3>
        <p>This dedicated training day is essential for our team's professional development and ensures we continue to provide the highest quality care and education for your children. The day will include:</p>
        <ul>
          <li>First aid certification renewals</li>
          <li>Safeguarding updates and best practices</li>
          <li>Curriculum development workshops</li>
          <li>Team building activities</li>
          <li>Health and safety refresher training</li>
        </ul>
        
        <p>Additionally, this year's training will include special focus sessions on:</p>
        <ul>
          <li>Supporting children's emotional wellbeing</li>
          <li>Inclusive practice for all children</li>
          <li>Environmental sustainability in childcare settings</li>
        </ul>
        
        <h3>Alternative Care Options</h3>
        <p>We understand that this closure may cause inconvenience for some families. If you require childcare on this day, we recommend making alternative arrangements well in advance. We're happy to provide information about trusted local childminders or share contacts among parent groups for those who wish to arrange shared care.</p>
        
        <h3>Normal Operations</h3>
        <p>Please note that Bisley Base will resume normal operating hours on Tuesday, June 4th. Any prepaid fees for June 3rd will be credited to your account or can be refunded upon request.</p>
        
        <p>We appreciate your understanding and support as we invest in our staff's professional development. If you have any questions or concerns about this closure, please don't hesitate to speak with our management team.</p>
        
        <p>Thank you for your continued support of Bisley Base and your understanding of the importance of ongoing professional development for our dedicated staff team.</p>
      `
    },
    {
      id: 'easter-egg-hunt-success',
      title: 'Easter Egg Hunt Success',
      date: 'March 28, 2024',
      excerpt: 'Thank you to all who participated in our annual Easter egg hunt! It was a wonderful day filled with excitement, laughter, and chocolate. Check out the photos in our gallery.',
      image: '/media/484871528_1066677122171511_3626558949284894548_n.jpg',
      category: 'events',
      content: `
        <p>Our annual Easter Egg Hunt was a tremendous success! Thank you to all the families who joined us for this special event on Saturday, March 23rd.</p>
        
        <p>Despite the occasional light shower, the weather largely cooperated, allowing us to hide over 500 eggs throughout our outdoor space for children to discover. The excitement and joy on the children's faces made all the preparation worthwhile!</p>
        
        <h3>Event Highlights</h3>
        <ul>
          <li>Over 80 children participated in age-appropriate egg hunts</li>
          <li>The Easter Bunny made a special appearance, delighting children and providing photo opportunities</li>
          <li>Creative Easter bonnet parade with prizes for the most inventive designs</li>
          <li>Face painting and spring-themed craft activities</li>
          <li>Refreshments including hot cross buns and other Easter treats</li>
        </ul>
        
        <h3>Community Spirit</h3>
        <p>The event showcased the wonderful community spirit at Bisley Base. We'd like to extend special thanks to our parent volunteers who helped with setup, activities, and cleanup. We couldn't have done it without you!</p>
        
        <p>We're also grateful to local businesses who supported the event through donations, including Bisley Village Store for contributing chocolate eggs and Blossoms Florist for decorative materials for our craft station.</p>
        
        <h3>Photo Gallery</h3>
        <p>We've uploaded photos from the event to our online gallery. You can view and download pictures of this wonderful day in the Gallery section of our website. If you have any photos you'd like to share, please send them to info@bisleybase.co.uk.</p>
        
        <h3>Looking Ahead</h3>
        <p>Based on the success of this event, we're already looking forward to next year's Easter celebration. If you have suggestions or would like to be involved in planning future events, please let us know.</p>
        
        <p>Thank you again for making our Easter Egg Hunt such a memorable occasion for the children and for reinforcing what makes the Bisley Base community so special.</p>
      `
    },
    {
      id: 'summer-term-dates',
      title: 'Summer Term Dates Announced',
      date: 'March 15, 2024',
      excerpt: 'Our summer term dates are now available on our website. The term begins on April 15th and ends on July 19th, with half term from May 27th to May 31st. Holiday Club available.',
      image: '/media/484848642_1066677095504847_8445714436322095198_n.jpg',
      category: 'term-time',
      content: `
        <p>We're pleased to announce our Summer Term dates for 2024. Please make a note of these important dates in your calendars.</p>
        
        <h3>Key Dates</h3>
        <ul>
          <li><strong>Term Starts:</strong> Monday, April 15th, 2024</li>
          <li><strong>Bank Holiday (Closed):</strong> Monday, May 6th, 2024</li>
          <li><strong>Half Term Break:</strong> Monday, May 27th - Friday, May 31st, 2024</li>
          <li><strong>Staff Training Day (Closed):</strong> Monday, June 3rd, 2024</li>
          <li><strong>Term Ends:</strong> Friday, July 19th, 2024</li>
        </ul>
        
        <h3>Regular Hours</h3>
        <p>During term time, our operating hours remain as follows:</p>
        <ul>
          <li><strong>Breakfast Club:</strong> 7:30 AM - 9:00 AM</li>
          <li><strong>Preschool Morning Session:</strong> 9:00 AM - 12:00 PM</li>
          <li><strong>Preschool Afternoon Session:</strong> 12:00 PM - 3:00 PM</li>
          <li><strong>After School Club:</strong> 3:00 PM - 6:00 PM</li>
        </ul>
        
        <h3>Half Term Holiday Club</h3>
        <p>During the May half term break (May 27th - May 31st), we will be running our popular Holiday Club from 8:00 AM to 6:00 PM daily. Bookings for Holiday Club will open on April 22nd, and we recommend securing your child's place early as spaces fill quickly.</p>
        
        <p>The theme for our May Holiday Club will be "Carnival Fun," with activities including:</p>
        <ul>
          <li>Carnival games and challenges</li>
          <li>Circus skills workshops</li>
          <li>Face painting and costume creation</li>
          <li>Fairground-inspired cooking activities</li>
          <li>Special carnival day celebration</li>
        </ul>
        
        <h3>Summer Events</h3>
        <p>Please also note these special events taking place during the Summer Term:</p>
        <ul>
          <li><strong>Preschool Sports Day:</strong> Wednesday, June 26th (10:30 AM - 12:00 PM)</li>
          <li><strong>Summer Fair:</strong> Saturday, July 6th (11:00 AM - 3:00 PM)</li>
          <li><strong>Preschool Graduation Ceremony:</strong> Tuesday, July 16th (2:00 PM - 3:30 PM)</li>
        </ul>
        
        <p>We look forward to an exciting and enriching Summer Term at Bisley Base! If you have any questions about term dates or our programs, please don't hesitate to contact us.</p>
      `
    },
    {
      id: 'new-healthy-menu',
      title: 'New Healthy Menu Launched',
      date: 'March 1, 2024',
      excerpt: 'We\'ve updated our food menu to include even more nutritious and delicious options. Our new menu focuses on fresh ingredients and balanced meals to fuel active minds and bodies.',
      image: '/media/484903596_1066677078838182_7009116715882669806_n.jpg',
      category: 'updates',
      content: `
        <p>We are excited to announce the launch of our new enhanced healthy menu across all Bisley Base services, designed to provide children with nutritious, delicious meals and snacks that support their growth, development, and learning.</p>
        
        <h3>Our New Food Philosophy</h3>
        <p>Our updated menu has been developed in consultation with a pediatric nutritionist to ensure it meets the dietary needs of growing children while introducing them to a wide variety of tastes, textures, and food groups. Key principles of our new menu include:</p>
        <ul>
          <li>Emphasis on fresh, seasonal produce</li>
          <li>Reduction in processed foods and added sugars</li>
          <li>Inclusion of a wider variety of whole grains</li>
          <li>Balance of proteins, carbohydrates, and healthy fats</li>
          <li>Consideration of food allergies and dietary requirements</li>
          <li>Culturally diverse meal options</li>
        </ul>
        
        <h3>Sample Menu Items</h3>
        <p><strong>Breakfast Club:</strong></p>
        <ul>
          <li>Overnight oats with fresh berries and honey</li>
          <li>Whole grain toast with various toppings including avocado and eggs</li>
          <li>Greek yogurt parfaits with granola and fruit</li>
          <li>Homemade breakfast muffins with hidden vegetables</li>
        </ul>
        
        <p><strong>Snack Times:</strong></p>
        <ul>
          <li>Vegetable sticks with hummus or yogurt dips</li>
          <li>Fresh fruit platters with a variety of seasonal offerings</li>
          <li>Homemade oat and fruit bars</li>
          <li>Wholegrain crackers with cheese</li>
        </ul>
        
        <p><strong>After School Club:</strong></p>
        <ul>
          <li>Homemade vegetable soup with whole grain bread</li>
          <li>Build-your-own whole grain wraps with various fillings</li>
          <li>Pasta with hidden vegetable sauce</li>
          <li>Baked potatoes with healthy toppings</li>
        </ul>
        
        <h3>Food Education</h3>
        <p>Alongside our new menu, we're introducing food education activities to help children understand more about where food comes from, how it grows, and why certain foods help our bodies. This will include:</p>
        <ul>
          <li>Growing vegetables in our garden area</li>
          <li>Simple cooking activities where children can participate</li>
          <li>Food-themed craft and learning activities</li>
          <li>Storybooks about healthy eating</li>
        </ul>
        
        <h3>Feedback Welcome</h3>
        <p>We value your feedback on our new menu. Over the coming weeks, we'll be asking children and parents to share their thoughts on the new food options. This feedback will help us make adjustments and improvements.</p>
        
        <p>Our full menu rotation is available on our website and posted on the parent information board. If your child has specific dietary requirements or allergies, please ensure these are updated in our records.</p>
        
        <p>We're excited about this positive change and the benefits it will bring to the children in our care.</p>
      `
    },
    {
      id: 'easter-holiday-club',
      title: 'Easter Holiday Club Registration Open',
      date: 'February 20, 2024',
      excerpt: 'Registration is now open for our Easter Holiday Club, running April 1st-5th and April 8th-12th. We\'ve planned egg-citing activities, spring crafts, and outdoor adventures!',
      image: '/media/484896872_1066677115504845_7644065957221388011_n.jpg',
      category: 'holiday-club',
      content: `
        <p>Registration is now open for our Easter Holiday Club! Join us for two weeks of egg-citing fun during the school break.</p>
        
        <h3>Dates and Times</h3>
        <ul>
          <li><strong>Week 1:</strong> Monday, April 1st - Friday, April 5th, 2024</li>
          <li><strong>Week 2:</strong> Monday, April 8th - Friday, April 12th, 2024</li>
          <li><strong>Daily Hours:</strong> 8:00 AM - 6:00 PM</li>
        </ul>
        
        <p>You can book full weeks, individual days, or half days (8:00 AM - 1:00 PM or 1:00 PM - 6:00 PM) to suit your needs.</p>
        
        <h3>Easter-themed Activities</h3>
        <p>We've planned an egg-ceptional program of activities including:</p>
        <ul>
          <li>Easter egg hunts and treasure trails</li>
          <li>Spring-themed arts and crafts</li>
          <li>Easter baking and cooking projects</li>
          <li>Outdoor games and nature exploration</li>
          <li>Easter bonnet design competition</li>
          <li>Springtime planting and gardening</li>
          <li>Egg decorating workshops</li>
        </ul>
        
        <h3>Special Events</h3>
        <p>We're excited to announce these special activities during our Easter Holiday Club:</p>
        <ul>
          <li><strong>Wednesday, April 3rd:</strong> Visit from Animal Encounters – meet and learn about spring animals including rabbits, chicks, and lambs</li>
          <li><strong>Thursday, April 4th:</strong> Easter Party with games, music, and treats</li>
          <li><strong>Tuesday, April 9th:</strong> Trip to Bisley Woods for a nature scavenger hunt (weather permitting)</li>
          <li><strong>Friday, April 12th:</strong> Puppet workshop and performance</li>
        </ul>
        
        <h3>What to Bring</h3>
        <p>Children should bring each day:</p>
        <ul>
          <li>Packed lunch (unless hot lunch option is booked)</li>
          <li>Water bottle</li>
          <li>Weather-appropriate clothing and footwear</li>
          <li>Spare clothes (especially for younger children)</li>
          <li>Sun hat and sun cream (if weather is warm)</li>
        </ul>
        
        <h3>Booking Information</h3>
        <p>Spaces are limited and allocated on a first-come, first-served basis. To secure your child's place, please complete the booking form available on our website or at reception and return it with payment by March 15th.</p>
        
        <p>Early bird discount of 10% is available for bookings made and paid for by March 8th. Sibling discounts are also available.</p>
        
        <p>We look forward to providing your children with a fun-filled Easter break at Bisley Base!</p>
      `
    },
    {
      id: 'parent-partnership',
      title: 'Parent Partnership Initiative Launch',
      date: 'February 10, 2024',
      excerpt: 'We\'re proud to announce our new Parent Partnership Initiative, designed to strengthen communication and collaboration between our staff and parents for the benefit of our children.',
      image: '/media/484871015_1066676782171545_7767803898011003153_n.jpg',
      category: 'updates',
      content: `
        <p>We are excited to announce the launch of our new Parent Partnership Initiative, designed to enhance communication, collaboration, and engagement between Bisley Base and our families.</p>
        
        <p>We believe that children thrive when there is a strong partnership between parents and childcare providers. This initiative aims to strengthen these connections and create more opportunities for meaningful involvement in your child's early learning journey.</p>
        
        <h3>Key Elements of the Initiative</h3>
        
        <p><strong>1. Enhanced Communication Systems</strong></p>
        <ul>
          <li>New digital communication app launching in March, allowing for real-time updates, photos, and messages</li>
          <li>Monthly electronic newsletters with upcoming events, curriculum focuses, and helpful resources</li>
          <li>Termly parent-educator meetings to discuss your child's progress and development</li>
          <li>Dedicated parent suggestion box (both physical and digital)</li>
        </ul>
        
        <p><strong>2. Parent Involvement Opportunities</strong></p>
        <ul>
          <li>Parent volunteering program (reading, sharing skills/hobbies, helping with special events)</li>
          <li>Termly "Stay and Play" sessions where parents can join activities</li>
          <li>Parent representatives for each age group to help facilitate communication</li>
          <li>Family events calendar with opportunities for community building</li>
        </ul>
        
        <p><strong>3. Educational Support</strong></p>
        <ul>
          <li>Monthly parent workshops on child development topics</li>
          <li>"Continuing the Learning" resources to extend activities at home</li>
          <li>Lending library of books, games, and resources</li>
          <li>Regular updates on curriculum themes and how to support these at home</li>
        </ul>
        
        <p><strong>4. Parent Advisory Group</strong></p>
        <ul>
          <li>Formation of a Parent Advisory Group to provide input on policies and programs</li>
          <li>Quarterly meetings to discuss improvements and future directions</li>
          <li>Collaborative planning for special events and fundraising activities</li>
        </ul>
        
        <h3>Getting Involved</h3>
        <p>There are many ways for families to participate in this initiative, regardless of schedule constraints or availability. We welcome involvement at whatever level works for your family.</p>
        
        <p>To express interest in any aspect of the Parent Partnership Initiative, please complete the form available at reception or on our website. Our first Parent Information Evening about this initiative will be held on Thursday, February 22nd at 7:00 PM.</p>
        
        <h3>Your Feedback Is Valuable</h3>
        <p>We want this initiative to be truly responsive to family needs and interests. We welcome your suggestions and feedback as we launch and develop these new opportunities for partnership.</p>
        
        <p>We're excited about strengthening our community through enhanced parent partnerships and look forward to the positive impact this will have on the children in our care.</p>
      `
    }
  ];

  // Find the current article
  const article = newsArticles.find(article => article.id === articleId);

  // Handle article not found
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
        <div className="max-w-xl text-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the article you're looking for. It may have been removed or the URL might be incorrect.</p>
          <Link 
            href="/news" 
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors inline-flex items-center"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Format category name
  const getCategoryName = (categoryId: string) => {
    const categories = [
      { id: 'all', name: 'All News' },
      { id: 'events', name: 'Events' },
      { id: 'updates', name: 'Updates' },
      { id: 'holiday-club', name: 'Holiday Club' },
      { id: 'term-time', name: 'Term Time' }
    ];
    return categories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Banner with Article Image */}
      <div className="relative h-[40vh] min-h-[300px] pt-24">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full mb-3">
              {getCategoryName(article.category)}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{article.title}</h1>
            <div className="flex items-center">
              <CalendarDaysIcon className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-gray-200">{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back to News */}
          <Link 
            href="/news" 
            className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 mb-6"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to News
          </Link>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
            <div 
              className="prose prose-emerald max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: article.content || '' }}
            ></div>

            {/* Share Article */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 font-medium">Share this article</p>
                <div className="flex space-x-4">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <ShareIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {/* Add other social share buttons here if needed */}
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles
                .filter(a => a.id !== articleId)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <motion.div
                    key={relatedArticle.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium bg-emerald-100 text-emerald-800 py-1 px-2 rounded-full uppercase">
                        {getCategoryName(relatedArticle.category)}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{relatedArticle.title}</h3>
                      <Link 
                        href={`/news/${relatedArticle.id}`}
                        className="text-emerald-600 font-medium text-sm hover:text-emerald-700 inline-flex items-center"
                      >
                        Read more
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 