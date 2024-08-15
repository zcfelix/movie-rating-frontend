import { Button } from '../ui/button.tsx';
import { Loader2 } from 'lucide-react';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <Button disabled>
      <Loader2 className="w-6 h-6 animate-spin" />
      Loading...
    </Button>
  </div>
);

export default Loader;
