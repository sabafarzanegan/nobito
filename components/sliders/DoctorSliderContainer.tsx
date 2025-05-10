import React from 'react';
import DochoomeCard from '../cards/DochoomeCard';
import { getDoctors } from '@/actions/generlaction';

async function DoctorSliderContainer() {
  const doctors = await getDoctors();
  console.log(doctors);

  return <div>{doctors?.map(doctor => <DochoomeCard key={doctor.id}  doctor={doctor}/>)}</div>;
}

export default DoctorSliderContainer;
