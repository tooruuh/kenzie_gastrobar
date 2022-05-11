import { ModalProviders } from "./modal";
import { TablesProvider } from "./tables";

export function Providers({ children }) {
  return (
    <TablesProvider>
      <ModalProviders>{children}</ModalProviders>
    </TablesProvider>
  );
}
