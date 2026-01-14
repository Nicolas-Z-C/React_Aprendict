import React, { useState, useEffect } from 'react';
import { Home, Database, LogIn, Activity, Trash2, Edit2, User, Mail } from 'lucide-react';

// ============================================================================
// INTERFACES Y TIPOS
// ============================================================================

/**
 * Interface que define la estructura de un usuario en la base de datos
 * @property id - Identificador único del usuario
 * @property name - Nombre completo del usuario
 * @property email - Correo electrónico del usuario
 * @property createdAt - Fecha y hora de creación en formato ISO
 */
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

/**
 * Interface para el manejo de datos de clicks en la página
 * @property count - Número total de clicks registrados
 * @property history - Array con timestamps de cada click
 */
interface ClickData {
  count: number;
  history: string[];
}

// ============================================================================
// COMPONENTE: LOGO
// ============================================================================

/**
 * Componente Logo - Muestra el logo de la aplicación
 * Incluye un ícono circular con gradiente y el nombre de la app
 * @returns JSX.Element - Logo completo con diseño moderno
 */
const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    {/* Círculo con gradiente que contiene las iniciales */}
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
      <span className="text-white font-bold text-xl">SPA</span>
    </div>
    {/* Nombre de la aplicación */}
    <span className="text-xl font-bold text-white">SinglePageApp</span>
  </div>
);

// ============================================================================
// COMPONENTE: NAVBAR
// ============================================================================

/**
 * Componente Navbar - Barra de navegación principal
 * Permite cambiar entre las diferentes secciones de la aplicación
 * @param activeSection - Sección actualmente seleccionada
 * @param setActiveSection - Función para cambiar de sección
 * @returns JSX.Element - Barra de navegación completa
 */
const Navbar: React.FC<{ 
  activeSection: string; 
  setActiveSection: (section: string) => void 
}> = ({ activeSection, setActiveSection }) => {
  
  // Array de configuración para los elementos del menú
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'clicks', label: 'Contador', icon: Activity },
    { id: 'database', label: 'Base de Datos', icon: Database },
    { id: 'login', label: 'Login', icon: LogIn },
  ];

  return (
    // Navbar con gradiente y posición sticky para mantenerlo visible al hacer scroll
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo a la izquierda */}
          <Logo />
          
          {/* Botones de navegación a la derecha */}
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                // Estilos dinámicos: resalta el botón activo con fondo blanco
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                    : 'hover:bg-white/20 hover:scale-105'
                }`}
              >
                <item.icon size={18} />
                {/* El texto se oculta en pantallas pequeñas */}
                <span className="hidden sm:inline font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// ============================================================================
// COMPONENTE: HOME SECTION
// ============================================================================

/**
 * Componente HomeSection - Página de inicio con información general
 * Muestra una bienvenida y cards descriptivos de las funcionalidades
 * @returns JSX.Element - Sección de inicio completa
 */
const HomeSection: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg p-8">
    {/* Título y descripción de bienvenida */}
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Bienvenido a SinglePageApp 🎉
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      Esta es una aplicación SPA profesional construida con React, TypeScript y Tailwind CSS.
    </p>
    
    {/* Grid de cards informativos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Card: Contador de Clicks */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
        <Activity className="text-blue-600 mb-3" size={32} />
        <h3 className="font-bold text-gray-800 mb-2">Contador de Clicks</h3>
        <p className="text-gray-600 text-sm">
          Rastrea cada click en la página con historial en tiempo real
        </p>
      </div>
      
      {/* Card: Base de Datos */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
        <Database className="text-purple-600 mb-3" size={32} />
        <h3 className="font-bold text-gray-800 mb-2">Base de Datos</h3>
        <p className="text-gray-600 text-sm">
          Sistema CRUD completo con persistencia en localStorage
        </p>
      </div>
    </div>
  </div>
);

// ============================================================================
// COMPONENTE: CLICK COUNTER
// ============================================================================

/**
 * Componente ClickCounter - Muestra estadísticas de clicks en la página
 * Incluye contador total y historial de clicks recientes
 * @param clickData - Objeto con el contador y el historial de clicks
 * @returns JSX.Element - Módulo de estadísticas de clicks
 */
const ClickCounter: React.FC<{ clickData: ClickData }> = ({ clickData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Título de la sección */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <Activity className="mr-3 text-blue-600" size={36} />
        Contador de Clicks
      </h2>
      
      {/* Grid con dos columnas: contador y historial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card del contador total - con gradiente llamativo */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-xl">
          <p className="text-white/80 text-sm mb-2 uppercase tracking-wide">Total de Clicks</p>
          {/* Número grande y destacado del contador */}
          <p className="text-6xl font-bold">{clickData.count}</p>
          <p className="text-white/70 text-xs mt-2">Clicks detectados en la página</p>
        </div>
        
        {/* Card del historial de clicks */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-gray-700 font-semibold mb-4 flex items-center">
            <Activity size={18} className="mr-2 text-blue-600" />
            Historial Reciente
          </p>
          
          {/* Lista scrolleable con los últimos 10 clicks */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {clickData.history.length === 0 ? (
              // Mensaje cuando no hay clicks registrados
              <p className="text-gray-400 text-sm">Aún no hay clicks registrados</p>
            ) : (
              // Muestra los últimos 10 clicks en orden inverso (más reciente primero)
              clickData.history.slice(-10).reverse().map((time, idx) => (
                <div key={idx} className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  🕐 {new Date(time).toLocaleTimeString('es-ES')}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE: DATABASE MODULE
// ============================================================================

/**
 * Componente DatabaseModule - Sistema CRUD para gestión de usuarios
 * Permite crear, leer, actualizar y eliminar usuarios con persistencia en localStorage
 * @returns JSX.Element - Módulo completo de base de datos
 */
const DatabaseModule: React.FC = () => {
  // ========== ESTADOS ==========
  const [users, setUsers] = useState<User[]>([]); // Array de usuarios
  const [name, setName] = useState(''); // Nombre del formulario
  const [email, setEmail] = useState(''); // Email del formulario
  const [editingId, setEditingId] = useState<string | null>(null); // ID del usuario en edición (null si es nuevo)

  // ========== EFECTO: CARGAR DATOS AL MONTAR ==========
  /**
   * useEffect que se ejecuta una vez al montar el componente
   * Carga los usuarios guardados en localStorage
   */
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // ========== FUNCIÓN: GUARDAR EN LOCALSTORAGE ==========
  /**
   * Guarda el array de usuarios en localStorage y actualiza el estado
   * @param newUsers - Array de usuarios a guardar
   */
  const saveToLocalStorage = (newUsers: User[]) => {
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  // ========== FUNCIÓN: AGREGAR O ACTUALIZAR USUARIO ==========
  /**
   * Agrega un nuevo usuario o actualiza uno existente
   * Valida que los campos no estén vacíos antes de proceder
   */
  const addUser = () => {
    // Validación: campos requeridos
    if (!name.trim() || !email.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    if (editingId) {
      // MODO EDICIÓN: Actualiza el usuario existente
      const updatedUsers = users.map(u => 
        u.id === editingId ? { ...u, name, email } : u
      );
      saveToLocalStorage(updatedUsers);
      setEditingId(null); // Sale del modo edición
    } else {
      // MODO CREAR: Agrega un nuevo usuario
      const newUser: User = {
        id: Date.now().toString(), // ID único basado en timestamp
        name,
        email,
        createdAt: new Date().toISOString(), // Fecha actual en formato ISO
      };
      saveToLocalStorage([...users, newUser]);
    }
    
    // Limpia el formulario después de guardar
    setName('');
    setEmail('');
  };

  // ========== FUNCIÓN: ELIMINAR USUARIO ==========
  /**
   * Elimina un usuario después de confirmar la acción
   * @param id - ID del usuario a eliminar
   */
  const deleteUser = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      saveToLocalStorage(users.filter(u => u.id !== id));
    }
  };

  // ========== FUNCIÓN: PREPARAR EDICIÓN ==========
  /**
   * Carga los datos del usuario en el formulario para editarlos
   * @param user - Usuario a editar
   */
  const editUser = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user.id);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* ========== TÍTULO DE LA SECCIÓN ========== */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <Database className="mr-3 text-purple-600" size={36} />
        Base de Datos - localStorage
      </h2>
      
      {/* ========== FORMULARIO DE USUARIO ========== */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border border-purple-200">
        <h3 className="font-semibold text-gray-700 mb-4">
          {/* Título dinámico según el modo (crear o editar) */}
          {editingId ? '✏️ Editar Usuario' : '➕ Agregar Nuevo Usuario'}
        </h3>
        
        {/* Grid responsivo con 3 columnas en pantallas medianas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Campo: Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-1" />
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Pérez"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          {/* Campo: Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail size={16} className="inline mr-1" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juan@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          {/* Botón: Agregar o Actualizar */}
          <div className="flex items-end">
            <button
              onClick={addUser}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl font-medium"
            >
              {/* Texto dinámico del botón */}
              {editingId ? '💾 Actualizar' : '➕ Agregar'}
            </button>
          </div>
        </div>
        
        {/* Botón para cancelar la edición (solo visible en modo edición) */}
        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setName('');
              setEmail('');
            }}
            className="mt-3 text-sm text-gray-600 hover:text-gray-800"
          >
            ❌ Cancelar edición
          </button>
        )}
      </div>

      {/* ========== TABLA DE USUARIOS ========== */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Encabezados de la tabla */}
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha Creación
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          
          {/* Cuerpo de la tabla */}
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 ? (
              // Mensaje cuando no hay usuarios
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                  No hay usuarios registrados. ¡Agrega el primero! 🎯
                </td>
              </tr>
            ) : (
              // Renderiza cada usuario como una fila
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* Formatea la fecha en formato local español */}
                    {new Date(user.createdAt).toLocaleDateString('es-ES')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {/* Botón: Editar */}
                    <button
                      onClick={() => editUser(user)}
                      className="text-blue-600 hover:text-blue-900 mr-3 transition-colors"
                      title="Editar"
                    >
                      <Edit2 size={18} />
                    </button>
                    {/* Botón: Eliminar */}
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Contador total de usuarios */}
      <div className="mt-4 text-sm text-gray-500">
        📊 Total de usuarios: <span className="font-semibold text-gray-700">{users.length}</span>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE: LOGIN MODULE
// ============================================================================

/**
 * Componente LoginModule - Formulario de login NO funcional
 * Solo representa la interfaz visual, sin lógica de autenticación real
 * @returns JSX.Element - Formulario de login completo
 */
const LoginModule: React.FC = () => {
  // Estados para los campos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Función que simula el login (no realiza autenticación real)
   * Muestra un alert informando que es solo una interfaz visual
   */
  const handleLogin = () => {
    alert('⚠️ Este es un login NO funcional (solo interfaz visual)');
  };

  return (
    // Contenedor centrado verticalmente
    <div className="flex items-center justify-center min-h-[500px]">
      {/* Card del formulario de login */}
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-200">
        
        {/* ========== ENCABEZADO ========== */}
        <div className="text-center mb-8">
          {/* Ícono circular con gradiente */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <LogIn size={40} className="text-white" />
          </div>
          {/* Título y subtítulo */}
          <h2 className="text-3xl font-bold text-gray-800">Iniciar Sesión</h2>
          <p className="text-gray-500 text-sm mt-2">Ingresa tus credenciales</p>
        </div>

        {/* ========== FORMULARIO ========== */}
        <div className="space-y-5">
          {/* Campo: Usuario */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-1" />
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="tu_usuario"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🔒 Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Botón: Iniciar Sesión */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            🚀 Iniciar Sesión
          </button>
        </div>

        {/* ========== ADVERTENCIA ========== */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>⚠️ Módulo de login no funcional</p>
          <p className="text-xs mt-1">(Solo interfaz visual)</p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL: APP
// ============================================================================

/**
 * Componente principal de la aplicación
 * Maneja la navegación entre secciones y el tracking de clicks global
 * @returns JSX.Element - Aplicación completa
 */
const App: React.FC = () => {
  // ========== ESTADOS ==========
  const [activeSection, setActiveSection] = useState('home'); // Sección actualmente visible
  const [clickData, setClickData] = useState<ClickData>({ count: 0, history: [] }); // Datos de clicks

  // ========== EFECTO: INICIALIZACIÓN Y TRACKING DE CLICKS ==========
  /**
   * useEffect que se ejecuta al montar el componente
   * 1. Carga los datos de clicks desde localStorage
   * 2. Agrega un event listener global para detectar todos los clicks
   * 3. Limpia el listener al desmontar
   */
  useEffect(() => {
    // Carga datos guardados de clicks
    const savedClicks = localStorage.getItem('clickData');
    if (savedClicks) {
      setClickData(JSON.parse(savedClicks));
    }

    /**
     * Manejador de clicks global
     * Se ejecuta cada vez que el usuario hace click en cualquier parte de la página
     */
    const handleClick = () => {
      setClickData(prev => {
        // Crea el nuevo objeto con el contador incrementado y el nuevo timestamp
        const newData = {
          count: prev.count + 1,
          history: [...prev.history, new Date().toISOString()]
        };
        // Guarda en localStorage
        localStorage.setItem('clickData', JSON.stringify(newData));
        return newData;
      });
    };

    // Agrega el listener al documento completo
    document.addEventListener('click', handleClick);
    
    // Cleanup: remueve el listener al desmontar para evitar memory leaks
    return () => document.removeEventListener('click', handleClick);
  }, []); // Array vacío = se ejecuta solo una vez

  // ========== FUNCIÓN: RENDERIZAR SECCIÓN ACTIVA ==========
  /**
   * Renderiza el componente correspondiente a la sección activa
   * @returns JSX.Element - Componente de la sección seleccionada
   */
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'clicks':
        return <ClickCounter clickData={clickData} />;
      case 'database':
        return <DatabaseModule />;
      case 'login':
        return <LoginModule />;
      default:
        return <HomeSection />;
    }
  };

  // ========== RENDER PRINCIPAL ==========
  return (
    // Contenedor principal con gradiente de fondo
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar fijo en la parte superior */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Contenedor del contenido con padding */}
      <div className="container mx-auto px-4 py-8">
        {/* Renderiza la sección activa */}
        {renderSection()}
      </div>
    </div>
  );
};

// Exporta el componente principal para su uso
export default App;