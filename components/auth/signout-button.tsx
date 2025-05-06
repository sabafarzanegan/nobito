import { Button } from '../ui/button';
import { ReactNode } from 'react';
import { signOutForm } from '@/actions/formaction';

export function SignOutBtn() {
  return (
    <form action={signOutForm} className="">
      <Button type="submit" className="cursor-pointer px-2 py-0.5">
        خروج
      </Button>
    </form>
  );
}
