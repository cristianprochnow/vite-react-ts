import { Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div>Tela Inicial</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
