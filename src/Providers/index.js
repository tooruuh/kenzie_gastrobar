import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";
import { LoginProviders} from './login'
import { AdminProviders } from "./admin";

export function Providers({ children }) {
  return (
    <TablesProvider>
      <LoginProviders>
       <ModalProviders>
        <AdminProviders>  
            {children}
        </AdminProviders>
       </ModalProviders>
      </LoginProviders>
    </TablesProvider>
  );
}
