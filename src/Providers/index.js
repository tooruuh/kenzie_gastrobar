import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";
import { LoginProviders } from "./login";
import { AdminProviders } from "./admin";
import { RegisterProviders } from "./register";
import { ReleaseProvider } from "./releases";

export function Providers({ children }) {
  return (
    <ModalProviders>
      <RegisterProviders>
        <LoginProviders>
          <ModalProviders>
            <AdminProviders>
              <ReleaseProvider>  
                {children}
              </ReleaseProvider>
            </AdminProviders>
          </ModalProviders>
        </LoginProviders>
      </RegisterProviders>
    </ModalProviders>
  );
}
