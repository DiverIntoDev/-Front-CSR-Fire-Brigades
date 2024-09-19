import supabase from "./config/supabaseClient";

async function Home() {

  let { data: brigades, error } = await supabase
  .from('brigades')
  .select('');

  if (error) {
    console.error('Erro ao buscar dados:', error);
  } else {
    console.log('Dados encontrados:', brigades);
    
  }

  return (
    <div>
      Conexão Brigadas
    </div>
  );
}

export default Home