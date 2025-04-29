import { signOut } from '@/auth';
import { Button } from '../ui/button';

export function SignOutBtn() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button variant="destructive" type="submit" className="cursor-pointer py-1 px-7">
        خروج
      </Button>
    </form>
  );
}
