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
          <AdminProviders>
            <TablesProvider>
              <ReleaseProvider>{children}</ReleaseProvider>
            </TablesProvider>
          </AdminProviders>
        </LoginProviders>
      </RegisterProviders>
    </ModalProviders>
  );
}
