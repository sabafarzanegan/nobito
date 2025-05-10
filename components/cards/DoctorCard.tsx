import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Doctor } from '@/lib/type';
import { Badge } from '../ui/badge';
import { ArrowLeft, Location } from 'iconsax-reactjs';
import { Button } from '../ui/button';

function DoctorCard({ doctor }: { doctor: Doctor | undefined | null }) {
  return (
    <Card className="p-6">
      <CardHeader className=" border-b border-b-gray-[#cbcbcb]">
        <div className="flex items-center gap-x-4">
          <div>
            <Image
              src={doctor?.profilePicture as string}
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-full"
              alt="doctor picture"
            />
          </div>
          <div className="space-y-3">
            <CardTitle className="text-b1 text-[#414141]">{doctor?.name}</CardTitle>
            <p className="text-gray-500 text-l1">{doctor?.expertise}</p>
          </div>
        </div>
        {/* rating */}
        <div></div>
      </CardHeader>
      <CardContent className="mt-6 space-y-6 p-0">
        {/* services */}
        <div className="text-[#7E7E7E] flex items-center gap-x-2.5 text-t2">
          <p>خدمات : </p>
          {doctor?.doctorServices.map(service => <span key={service.id}>{service.name}/</span>)}
        </div>
        {/* booking method */}
        <div className="flex items-center gap-x-2.5 text-t2">
          <p className="text-[#414141]">شیوه نوبت دهی : </p>
          {doctor?.bookingmethod === 'Inperson' && (
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/call-calling.svg"
                width={18}
                height={18}
                alt="phonecallicon"
                className=" rounded-full  w-[18px] h-[18px]"
              />
              <span>{doctor?.bookingmethod == 'Inperson' && 'حضوری'}</span>
            </div>
          )}
          {doctor?.bookingmethod === 'Onlinemeeting' && (
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/monitor-mobbile.svg"
                width={18}
                height={18}
                alt="phonecallicon"
                className=" rounded-full  w-[18px] h-[18px]"
              />
              <span>{doctor?.bookingmethod == 'Onlinemeeting' && 'آنلاین'}</span>
            </div>
          )}

          {doctor?.bookingmethod === 'Phoneconsultation' && (
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/buliding.svg"
                width={18}
                height={18}
                alt="phonecallicon"
                className=" rounded-full  w-[18px] h-[18px]"
              />
              <span>{doctor?.bookingmethod == 'Phoneconsultation' && 'گفتگو تلفنی'}</span>
            </div>
          )}
        </div>
        {/* feature */}
        <div className="flex items-center gap-x-2">
          <p>شاخصه ها : </p>
          {doctor?.clinicfeature.map(feature => (
            <Badge
              className="border border-primary-500 rounded-4xl py-[5px] px-3 text-primary-500"
              key={feature?.id}
            >
              {feature?.featureName}
            </Badge>
          ))}
        </div>
        <CardFooter className="border-t border-t-[#CBCBCB] mt-6 flex items-center justify-between p-0">
          <div className="flex items-center gap-x-2">
            <div>
              <Location size="20" color="#757575" />
            </div>
            <p className=" text-[#414141] text-b2 ">{`نشانی :  ${doctor?.address}`}</p>
          </div>
          <Button
            className="bg-primary-500 text-white
          "
          >
            دریافت نوبت
            <ArrowLeft size="20" color="#ffffff" />
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;
