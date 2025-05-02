import UpdatePassServerWrapper from '@/components/auth/UpdatePassServerWrapper';
import db from '@/db';
import React from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  console.log(token);
  let tokenIsValid = false;

  if (!token) {
    tokenIsValid = false;
    return;
  }
  try {
    const passwordResetTokens = await db.passwordResetToken.findFirst({
      where: {
        token: token as string,
      },
    });

    const now = Date.now();
    if (
      passwordResetTokens?.tokenExpiration &&
      now < passwordResetTokens.tokenExpiration.getTime()
    ) {
      tokenIsValid = true;
    } else {
      tokenIsValid = false;
    }
  } catch (err) {
    console.error('Error validating token:', err);
    tokenIsValid = false;
  }

  return (
    <div>
      <UpdatePassServerWrapper tokenIsValid={tokenIsValid} />
    </div>
  );
}
