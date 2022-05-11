import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";
import { LoginProviders} from './login'

export function Providers({ children }) {
  return (
    <TablesProvider>
      <LoginProviders>
        <ModalProviders>{children}</ModalProviders>
      </LoginProviders>
    </TablesProvider>
  );
}
