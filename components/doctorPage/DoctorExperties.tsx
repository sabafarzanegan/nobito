import { doctorServices } from '@/lib/type';
import Image from 'next/image';
import { Badge } from '../ui/badge';

interface expertiesProps {
  expertise: string | undefined;
  doctorServices: doctorServices[] | undefined;
}

function DoctorExperties({ expertise, doctorServices }: expertiesProps) {
  return (
    <div className="mt-12 space-y-10 border-b border-gray-200 pb-10">
      <div className="flex items-center gap-x-2 ">
        <div>
          <Image
            src="/images/stethoscope.svg"
            width={40}
            height={40}
            alt="stethoscope"
            className="w-10 h-10"
          />
        </div>
        <div className="text-b1 flex items-center gap-x-1.5">
          <p className="text-gray-400">تخصص پزشکی : </p>
          <p className="text-primary-500">{expertise}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-4">
          {doctorServices?.map(feature => (
            <Badge
              className="border  border-gray-500 rounded-4xl bg-transparent py-[12px] px-3 text-gray-500 text-sm"
              key={feature?.id}
            >
              {feature?.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorExperties;
