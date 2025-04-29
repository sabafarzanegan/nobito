import UpdatePassForm from '@/components/auth/UpdatePassForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import db from '@/db';
import Link from 'next/link';

async function page({ searchParams }: { searchParams: { token?: string } }) {
  let tokenIsValid = false;
  const { token } = searchParams;
  if (token) {
    const passwordResetTokens = await db.passwordResetToken.findFirst({
      where: {
        token: token,
      },
    });
    const now = Date.now();
    if (
      !!passwordResetTokens?.tokenExpiration &&
      now < passwordResetTokens.tokenExpiration.getTime()
    ) {
      tokenIsValid = true;
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {tokenIsValid ? 'بازیابی رمز عبور' : 'رمز عبور فرستاده شده به ایمیل شما منقضی شده است'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tokenIsValid ? (
          <div>
            <UpdatePassForm />
          </div>
        ) : (
          <Button variant="link" className="text-primary-500">
            <Link href="/reset-password">بازیابی رمز عبور</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default page;
