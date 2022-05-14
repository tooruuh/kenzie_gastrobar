import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";
import { LoginProviders} from './login'
import { AdminProviders } from "./admin";
import { ReleaseProvider } from "./releases";

export function Providers({ children }) {
  return (
    <TablesProvider>
      <LoginProviders>
       <ModalProviders>
        <AdminProviders> 
          <ReleaseProvider>
            {children}
          </ReleaseProvider> 
        </AdminProviders>
       </ModalProviders>
      </LoginProviders>
    </TablesProvider>
  );
}
