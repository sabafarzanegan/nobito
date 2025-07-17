import DochoomeCard from '@/components/cards/DochoomeCard';
import StaticSuccess from '@/components/hoom/StaticSuccess';
import Landing from '@/components/landing/Landing';
import DoctorSliderContainer from '@/components/sliders/DoctorSliderContainer';

function page() {
  return (
    <div className="">
      <Landing />
      {/* Website success statistics */}
      <StaticSuccess />
      {/* doctor slider */}
      <div className="mt-4 px-4 md:px-28">{/* <DoctorSliderContainer /> */}</div>
    </div>
  );
}

export default page;
