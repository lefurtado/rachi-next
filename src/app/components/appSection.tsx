import illustration2 from '@/assets/images/illustration2.svg';
import { AppButton } from './ui/app-button';
import Image from 'next/image';

export default function AppSection() {
  return (
    <section className="bg-brand-color-light">
      <div className='flex flex-col py-8 lg:flex-row h-svh sm:h-fit justify-center lg:justify-between items-center mx-6 md:mx-auto lg:max-w-[970px] xl:max-w-[1170px] 2xl:max-w-screen-xl'>
        <div className='flex flex-col gap-8 lg:gap-14'>
          <h2 className='font-sora font-semibold text-2xl lg:text-[32px] text-center lg:text-left text-dark-10'>Baixe nosso app para desfrutar mais!</h2>
          <p className='text-sm lg:text-base text-center lg:text-left text-dark-20 max-w-[444px]'>Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
          <div className='flex justify-around lg:justify-start lg:gap-3'>
            <AppButton platform='google' />
            <AppButton platform='apple' />
          </div>
        </div>
        <Image className='hidden sm:block' src={illustration2} alt="" />
      </div>
    </section>
  );
}
