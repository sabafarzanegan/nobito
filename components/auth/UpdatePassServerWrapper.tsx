import UpdatePassForm from '@/components/auth/UpdatePassForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
export default async function UpdatePassServerWrapper({ tokenIsValid }: { tokenIsValid: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {tokenIsValid ? 'بازیابی رمز عبور' : 'رمز عبور فرستاده شده به ایمیل شما منقضی شده است'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tokenIsValid ? (
          <UpdatePassForm />
        ) : (
          <Button variant="link" className="text-primary-500">
            <Link href="/reset-password">بازیابی رمز عبور</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
