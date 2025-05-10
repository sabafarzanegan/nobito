import DochoomeCard from '@/components/cards/DochoomeCard';
import Landing from '@/components/landing/Landing';
import DoctorSliderContainer from '@/components/sliders/DoctorSliderContainer';

function page() {
  return (
    <div className="">
      <Landing />
      {/* doctor slider */}
      <div className="mt-4">
        <DoctorSliderContainer />
      </div>
    </div>
  );
}

export default page;
