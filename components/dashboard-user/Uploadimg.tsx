import Image from 'next/image';
import Uplodimgdialog from './Uplodimgdialog';

function Uploadimg() {
  return (
    <div className="relative mb-[50px]">
      <div>
        <Image src="/images/profile pic.svg" width={336} height={120} alt="profile back" />
      </div>
      <div className="absolute   left-1/2 translate-x-[-50%] bottom-[10px] ">
        <Uplodimgdialog />
      </div>
    </div>
  );
}

export default Uploadimg;
