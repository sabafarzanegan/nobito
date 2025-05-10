import { getDoctors } from '@/actions/generlaction';
import DoctorCard from '@/components/cards/DoctorCard';

async function page() {
  const doctors = await getDoctors();
  return <div>{doctors?.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>;
}

export default page;
