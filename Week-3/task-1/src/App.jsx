import React from 'react';
import LoginForm from "./components/forms/Loginform";
import SimpleForm from "./components/forms/Simpleform";
import Button from "./components/ui/Button";
import TextUpdater from './components/ui/TextUpdater';
import UserCard from './components/ui/UserCard';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-40 py-10">
      <div className="w-full h-full mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <hr />
        </div>

        <div className="w-full h-full flex flex-col flex-wrap justify-between items-center gap-8 p-10">
          <section>
            <h2 className="text-center text-2xl font-bold mb-4">Text Updater</h2>
            <TextUpdater />
            
          </section>
          <div className='w-full h-4 border-b'></div>

          <section>
            <h2 className="text-center text-2xl font-bold mb-4">Simple Form</h2>
            <SimpleForm />
          </section>

          <div className='w-full h-4 border-b'></div>

          <section>
            <h2 className="text-center text-2xl font-bold mb-4">User Card</h2>
            <UserCard name="Yuvraj Singh" email="yuvrajsingh3715@gmail.com" />
          </section>

          <div className='w-full h-4 border-b'></div>

          <section>
            <h2 className="text-center text-2xl font-bold mb-4">Button</h2>
            <Button />
          </section>

          <div className='w-full h-4 border-b'></div>

          <section>
            <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
            <LoginForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;