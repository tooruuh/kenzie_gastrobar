import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";
import { LoginProviders} from './login'
import { AdminProviders } from "./admin";
import { RegisterProviders } from "./register";

export function Providers({ children }) {
  return (
    <TablesProvider>
      <RegisterProviders>
        <LoginProviders>
          <ModalProviders>
            <AdminProviders>  
                {children}
            </AdminProviders>
          </ModalProviders>
        </LoginProviders>
      </RegisterProviders>
    </TablesProvider>
  );
}
