import * as AppleAuthentication from 'expo-apple-authentication';
import { Platform } from 'react-native';

import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { ComponentPropsWithoutRef, FC } from 'react';

export interface AuthProps
  extends ComponentPropsWithoutRef<typeof AppleAuthentication.AppleAuthenticationButton> { }

export const Auth: FC<AuthProps> = ({ ...props }) => {
  if (Platform.OS === 'ios'){
    return (
      <AppleAuthentication.AppleAuthenticationButton
        {...props}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 64 }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            })
            // Sign in via Supabase Auth.
            if (credential.identityToken) {
              const {
                error,
                data: { user },
              } = await supabase.auth.signInWithIdToken({
                provider: 'apple',
                token: credential.identityToken,
              })
              console.log(JSON.stringify({ error, user }, null, 2))
              if (!error) {
                // user is signed in
                router.replace('/');
              }
            } else {
              throw new Error('No identityToken.')
            }
          } catch (e: any) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    );
  }
};
