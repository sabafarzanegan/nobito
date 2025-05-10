import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Location } from 'iconsax-reactjs';
import { Doctor } from '@/lib/type';

function DochoomeCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="max-w-[282px] w-full max-h-[405px] h-full rounded-[16px] p-4">
      <CardHeader className="p-0">
        <Image
          src={doctor.profilePicture}
          width={250}
          height={152}
          alt="doctor picture"
          className="w-[250px] h-[152px] rounded-[12px]"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-3">
          <CardTitle className="text-b2 font-bold">{doctor.name}</CardTitle>
          <CardDescription className="text-t3 text-gray-400">{doctor.expertise}</CardDescription>
        </div>
        <div className="flex items-center gap-x-2 mt-6">
          {doctor.doctorServices.slice(0, 2).map(service => (
            <Badge
              key={service.id}
              variant="default"
              className="bg-gray-50 text-gray-500 text-[0.75rem] font-normal"
            >
              {service.name}
            </Badge>
          ))}
        </div>
        <CardFooter className="p-0 flex items-center gap-x-2 py-4 border-t border-t-gray-200 mt-4">
          <div>
            <Location size="20" color="#757575" />
          </div>
          <p className="text-l1 text-gray-500  line-clamp-1">{`نشانی :  ${doctor.address}`}</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export default DochoomeCard;
