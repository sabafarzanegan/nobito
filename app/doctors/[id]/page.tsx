import { getDoctorById } from '@/actions/generlaction';
import Address from '@/components/doctorPage/Address';
import BookingMethod from '@/components/doctorPage/BookingMethod';
import Comment from '@/components/doctorPage/Comment';
import Description from '@/components/doctorPage/Description';
import DoctorExperties from '@/components/doctorPage/DoctorExperties';
import Image from 'next/image';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = await getDoctorById({ doctorId: id });
  console.log(doctor);

  return (
    <section className="w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-white ">
        <div className="lg:col-span-2 ">
          <div className="flex gap-x-4 w-full items-start">
            <div className="w-[132px] h-[132px] md:w-[192px] md:h-[192px] rounded-full border border-gray-500 flex items-center justify-center">
              <Image
                src={doctor?.profilePicture as string}
                width={176}
                height={176}
                className="w-[122px] h-[122px] md:w-[176px] md:h-[176px] rounded-full"
                alt="profile picture"
              />
            </div>
            <div className="space-y-6 flex-1">
              <p className="text-h3 text-black-400">{doctor?.name}</p>
              <p className="text-t2 text-gray-500">{doctor?.expertise}</p>
              <p className="text-gray-500 text-t2">{doctor?.location}</p>
              <div className="flex flex-1 items-center justify-between w-full">
                <div className="flex items-center space-x-1 text-t1 text-black-400">
                  <p>کد نظام پزشکی:</p>
                  <span>
                    {Number(doctor?.registrationnumber as string).toLocaleString('fa-IR', {
                      useGrouping: false,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <BookingMethod bookingmethode={doctor?.bookingmethod} />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 ">
          {/* description */}
          <div>
            <p className="text-h2 text-black-400 font-semibold mb-6">درباره پزشک</p>
            <Description text={doctor?.description} />
          </div>
          {/* experties */}
          <DoctorExperties expertise={doctor?.expertise} doctorServices={doctor?.doctorServices} />
          {/* address */}
          <Address address={doctor?.address} phonenum={doctor?.phonenum} />
          {/* comment */}
          <Comment />
        </div>
      </div>
    </section>
  );
}

export default page;
