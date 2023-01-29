import bgBottomDes from './images/bg-pattern-bottom-desktop.svg';
import bgTopDes from './images/bg-pattern-Top-desktop.svg';
import bgBottomMob from './images/bg-pattern-bottom-mobile.svg';
import bgTopMob from './images/bg-pattern-Top-mobile.svg';

import starIcon from './images/icon-star.svg';

import coltonAvatar from './images/image-colton.jpg';
import anneAvatar from './images/image-anne.jpg';
import ireneAvatar from './images/image-irene.jpg';

function Testimonial({name, job, content, avatar, className}) {
  return (
    <div className={`${className} h-fit bg-violet-800 rounded-lg py-12 px-6 text-white`}>
      <div className='flex gap-6'>
        <div className='w-12 h-12'>
          <img className='rounded-full' src={avatar} alt="" />
        </div>
        <div className='flex flex-col'>
          <strong>{name}</strong>
          <span className='text-fuchsia-600'>{job}</span>
        </div>
      </div>
      <p className='mt-4 sm:mt-6'>{content}</p>
    </div>
  )
};
function Rate({content, className}) {
  return (
    <div className={`${className} h-fit flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-80 sm:w-96 rounded-lg py-4 px-6 bg-purple-200`}>
      <div className='flex'>
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
      </div>
      <b className='text-violet-900'>{content}</b>
    </div>
  )
}
function App() {

  return (
    <main className='w-full min-h-screen bg-violet-50/50 grid place-content-center relative overflow-hidden'>
      <picture>
        <source media='(min-width: 640.99px)' srcSet={bgTopDes} />
        <img className='absolute top-0 left-0' src={bgTopMob} alt="" />
      </picture>
      <picture>
        <source media='(min-width: 640.99px)' srcSet={bgBottomDes} />
        <img className='absolute bottom-0 sm:-bottom-40 right-0' src={bgBottomMob} alt="" />
      </picture>
      <section className='p-4 sm:p-20 grid gap-12 sm:gap-24 place-content-center w-80 sm:w-auto'>
        <div className='sm:flex'>
          <div className='sm:w-1/2 text-center sm:text-left mb-4 sm:mb-0'>
            <h1 className='text-4xl sm:text-6xl text-violet-900 font-bold'>10,000+ of our users love our products</h1>
            <p className='text-violet-500 mt-8 sm:pr-32'>
              We only provide great products combined with excellent customer service.
              See what our satisfied customers are saying about our services.
            </p>
          </div>
          <div className='sm:w-1/2 grid gap-6'>
            <Rate content={"Rated 5 Stars in Reviews"} />
            <Rate className={"sm:ml-12"} content={"Rated 5 Stars in Report Guru"} />
            <Rate className={"sm:ml-24"} content={"Rated 5 Stars in BestTech"} />
          </div>
        </div>
        <div className='grid sm:flex gap-8'>
          <Testimonial name={"Colton Smith"} job={'Verified Buyer'} content={`"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`} avatar={coltonAvatar} />

          <Testimonial className='sm:mt-5' name={"Irene Roberts"} job={'Verified Buyer'} content={`"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`} avatar={ireneAvatar} />

          <Testimonial className='sm:mt-10' name={"Anne Wallace"} job={'Verified Buyer'} content={`"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"`} avatar={anneAvatar} />
        </div>
      </section>
    </main>
  )
}

export default App
