import { CallCalling, DeviceMessage, User } from 'iconsax-reactjs';
import { Card, CardContent, CardHeader } from '../ui/card';
import { bookingMethodes } from '@/lib/helper';

function BookingMethod({
  bookingmethode,
}: {
  bookingmethode: 'Phoneconsultation' | 'Onlinemeeting' | 'Inperson' | undefined;
}) {
  return (
    <Card className="bg-transparent border border-gray-200 shadow-none ">
      <CardHeader>
        <h1 className="text-black-400 text-h1 text-center font-medium">ملاقات با پزشک</h1>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-x-6 px-4">
        {bookingMethodes.map(methode => (
          <div key={methode.id} className="flex items-center justify-center flex-col gap-y-4">
            <div
              className={`w-[104px] h-[104px] border ${bookingmethode == methode.link ? 'border-primary-500 bg-primary-500' : 'border-[#919191] bg-transparent'}  rounded-lg grid place-content-center`}
            >
              {methode.icon(`${bookingmethode == methode.link ? '#ffffff' : '#919191'} `)}
            </div>
            <p
              className={`text-h3 ${bookingmethode == methode.link ? 'text-primary-500' : 'text-black-200'} `}
            >
              {methode.name}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default BookingMethod;
