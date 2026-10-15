const ICONS = {
  plus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  dollar: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  id: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M13 10h5M13 14h5"/>',
  cam: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  up: '<path d="M12 16V4M6 10l6-6 6 6M4 20h16"/>',
  qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v7M14 20h3"/>'
};

const USERS = {
  recep: ['Bienvenida, Cristina', 'Recepcionista', 'CG'],
  admin: ['Rodrigo Mendez', 'Director Operativo', 'RM'],
  coach: ['Alejandro Torres', 'Coach · Fuerza', 'AT']
};

const STATUS = {
  activa: ['ACTIVA', 'ok'],
  porvencer: ['POR VENCER', 'warn'],
  pausa: ['EN PAUSA', 'mut'],
  vencida: ['VENCIDA', 'bad']
};

const STATE = {
  role: null,
  view: 'login',
  pick: 'recep',
  sel: '24890',
  filt: 'todos',
  q: '',
  tier: 'Plata',
  pers: 1,
  minor: false,
  disc: 0,
  modal: null,
  toast: '',
  folio: 10843,
  paysToday: 12,
  regToday: 5,
  pend: 3,
  shift: false,
  aforo: 18,
  method: 'Efectivo',
  selT: 'TR-26002',
  coachRes: null,
  M: [
    { id: '24890', n: 'Sergio Ramos', age: 32, plan: 'Oro', st: 'activa', v: '28/09/2026', inside: false, tel: '+52 612 123 4567' },
    { id: '31245', n: 'Ana López', age: 28, plan: 'Plata', st: 'activa', v: '15/10/2026', inside: true, tel: '+52 612 555 0101' },
    { id: '27631', n: 'Juan Martínez', age: 35, plan: 'Bronce', st: 'porvencer', v: '26/09/2026', inside: false, tel: '+52 612 555 0102' },
    { id: '19876', n: 'Carlos Pérez', age: 41, plan: 'Plata', st: 'pausa', v: '—', inside: false, tel: '+52 612 555 0103' },
    { id: '30512', n: 'Lucía García', age: 26, plan: 'Bronce', st: 'vencida', v: '20/09/2026', inside: false, tel: '+52 612 555 0104' }
  ],
  T: [
    { f: 'TR-26001', n: 'Mariano Ruiz', id: 'V-29188', h: '09:20', b: 'BBVA · 48261001', m: 1100, s: 'pend' },
    { f: 'TR-26002', n: 'Sofía Ramírez', id: 'V-28406', h: '10:15', b: 'BBVA · 48261002', m: 500, s: 'pend' },
    { f: 'TR-26003', n: 'Diego Soto', id: 'V-30218', h: '10:30', b: 'STP · 48261003', m: 850, s: 'pend' },
    { f: 'TR-26004', n: 'Elena Castro', id: 'V-30042', h: '01 oct', b: 'Santander · 48261004', m: 1400, s: 'pend' }
  ],
  act: [
    ['10:45', 'Usuario Carlos Mendoza registrado', 'Nuevo Perfil · Recepción', 'Completado', 'ok'],
    ['10:30', 'Pago procesado: Ticket #10842', 'Caja · Recepcionista B', 'Pago Exitoso', 'ok'],
    ['10:12', 'Usuario Manuel Vega actualizado', 'Actualización de Perfil · Recepción', 'Completado', 'ok'],
    ['09:50', 'Pago pendiente: Ticket #10841', 'Caja · Recepcionista B', 'Transferencia Sin Verificar', 'warn'],
    ['08:50', 'Pago rechazado - Usuario Roberto Vega', 'Caja · Recepcionista B', 'Transferencia No Recibida', 'bad']
  ],
  P: { Bronce: 500, Plata: 800, Oro: 1200 },
  INS: 300,
  MULTA: 100
};

const S = STATE;

function $(id) {
  return document.getElementById(id);
}

function icon(name, size, color) {
  return '<svg width="' + (size || 20) + '" height="' + (size || 20) + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[name] + '</svg>';
}

function memberById(id) {
  return S.M.find((member) => member.id === id);
}

function initials(name) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('');
}

function badge(kind, text) {
  return '<span class="badge b-' + kind + '">' + text + '</span>';
}

function statusBadge(statusKey) {
  return badge(STATUS[statusKey][1], STATUS[statusKey][0]);
}

function money(value) {
  return '$' + Number(value).toLocaleString('es-MX');
}

function go(view) {
  S.view = view;
  S.coachRes = null;
  render();
  window.scrollTo(0, 0);
}

function toast(message) {
  S.toast = message;
  render();
  setTimeout(() => {
    S.toast = '';
    render();
  }, 2600);
}

function log(text, subtitle, label, kind) {
  const now = new Date();
  const stamp = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
  S.act.unshift([stamp, text, subtitle || 'Caja · Recepción', label || 'Completado', kind || 'ok']);
}

function back(label, view) {
  return '<button class="back" onclick="go(\'' + view + '\')">← ' + label + '</button>';
}

function renderNavbar() {
  const user = USERS[S.role];
  return '<div class="nb"><div class="logo">VÉRTI<b>GO!</b></div><div class="sb"><span class="live"><i></i>Sistema en Línea</span><span>Sede Central · Garita de Jalisco</span></div><div class="pf"><div class="t"><b>' + user[0] + '</b><span>' + user[1] + '</span></div><div class="avt" onclick="S.role=null;S.view=\'login\';render()" title="Cerrar sesión">' + user[2] + '</div></div></div>';
}

function renderTabs() {
  if (S.role !== 'coach') return '';

  const tabs = [
    ['area', 'Mi área'],
    ['coach', 'Escanear QR'],
    ['presentes', 'Miembros presentes']
  ];

  return '<div class="tabs"><span>CONSOLA COACH</span>' + tabs.map((tab) => '<button class="' + (S.view === tab[0] ? 'on' : '') + '" onclick="go(\'' + tab[0] + '\')">' + tab[1] + '</button>').join('') + '</div>';
}

function renderModal() {
  const modal = S.modal;
  if (!modal) return '';

  return '<div class="modal"><div class="card"><div>' + badge('ok', '✔ ' + modal.t) + '</div><h2 style="color:var(--tx)">' + modal.n + '</h2>' + (modal.f ? '<div class="mono mut">RECIBO FOLIO R-' + modal.f + '</div>' : '') + '<div class="kv" style="padding:12px;border:1px solid var(--line);border-radius:12px"><span style="color:var(--tx)">' + modal.c + '</span><b>' + money(modal.a) + '</b></div><p class="mut" style="margin:0;font-size:13px">' + modal.msg + '</p>' + (modal.f ? '<button class="btn l w" onclick="toast(\'Recibo listo para imprimir o guardar en PDF\')">Imprimir / PDF</button>' : '') + '<button class="btn w" onclick="S.modal=null;go(\'panel\')">Volver al panel</button></div></div>';
}

function viewLogin() {
  return '<div class="lg"><div style="width:100%;max-width:460px;position:relative;z-index:1"><div class="lc"><div class="k">ACCESO PARA PERSONAL</div><div class="u"></div><div class="logo" style="text-align:center;font-size:44px">VÉRTI<b>GO!</b></div><div class="lbl"><span>USUARIO</span></div><div class="in">' + icon('mail', 18) + '<input placeholder="ej. Frank2468"></div><div class="lbl"><span>CONTRASEÑA</span><a href="#" onclick="return false">¿Olvidaste tu contraseña?</a></div><div class="in">' + icon('lock', 18) + '<input type="password" value="••••••••••••">' + icon('eye', 18) + '</div><button class="btn w" style="margin-top:24px;box-shadow:0 6px 24px #d6df2a44" onclick="login()">Iniciar Sesión</button></div><div class="pills" style="justify-content:center;margin-top:18px"><span class="mut" style="font-size:12px;align-self:center">Demo · entrar como:</span>' + ['recep', 'admin', 'coach'].map((role) => '<button class="' + (S.pick === role ? 'on' : '') + '" onclick="S.pick=\'' + role + '\';render()">' + role.charAt(0).toUpperCase() + role.slice(1) + '</button>').join('') + '</div><p class="mut" style="text-align:center;font-size:11px;margin-top:18px">© 2026 VÉRTIGO! FITNESS S.L. ACCESO EXCLUSIVO PARA EMPLEADOS.</p></div></div>';
}

function login() {
  S.role = S.pick;
  S.view = S.role === 'recep' && !S.shift ? 'turno' : (S.role === 'coach' ? 'coach' : 'panel');
  render();
}

function viewTurno() {
  return '<main><div><h1>Inicio de turno &amp; arqueo inicial de caja</h1><p class="sub" style="font-weight:500;color:#cfcfcf">Registro obligatorio de recepción, verificación física del fondo de caja y checklist de apertura antes de habilitar cobros.</p></div><div class="split"><div class="card"><div class="sec">1. Declaración de fondo inicial</div><label>MONTO TOTAL EN EFECTIVO RECIBIDO</label><div class="big"><span style="color:var(--lime)">$</span> 1,530.00 <span class="mut" style="font-size:13px;margin-left:auto">MXN</span></div><div class="wrap" style="margin-top:16px"><table><tr><th>Denominación</th><th>Unidades</th><th>Subtotal</th></tr><tr><td>Billete $500</td><td>1</td><td>$500.00</td></tr><tr><td>Billete $200</td><td>3</td><td>$600.00</td></tr><tr><td>Billete $100</td><td>2</td><td>$200.00</td></tr><tr><td>Billete $50</td><td>2</td><td>$100.00</td></tr><tr><td>Monedas ($10, $5, $2, $1)</td><td>13</td><td>$130.00</td></tr><tr><td><b>TOTAL ARQUEADO FÍSICO</b></td><td></td><td style="color:var(--lime)"><b>$1,530.00</b></td></tr></table></div><label style="margin-top:20px">TURNO A INICIAR</label><div class="sel"><button class="on" style="text-align:left">● Turno Matutino<br><small class="mut">06:00 – 14:00 hrs</small></button><button style="text-align:left;color:var(--mut)">○ Turno Vespertino<br><small>14:00 – 22:00 hrs</small></button></div><label style="margin-top:20px">NOTAS / OBSERVACIONES DE RECEPCIÓN</label><textarea rows="3" placeholder="Ej: Se recibe caja chica completa, sin faltantes de cambio…"></textarea></div><div style="display:flex;flex-direction:column;gap:24px"><div class="card"><div class="sec">2. Checklist táctico de apertura</div><div class="chk"><i>' + icon('check', 12) + '</i><span>Máquinas y herramientas revisadas antes del horario pico.</span></div><div class="chk"><i>' + icon('check', 12) + '</i><span>Tarjetas, app y acceso de socios verificados.</span></div><div class="chk"><i>' + icon('check', 12) + '</i><span>Entrada de usuarios y pagos listos para operar.</span></div><div class="chk"><i>' + icon('check', 12) + '</i><span>Se confirma señal de seguridad y sala de descanso estable.</span></div></div><div class="card"><div class="sec">3. Confirmación final</div><div class="pills"><button class="on">Fondo conforme</button><button>Sin incidencias</button><button>Revisión completada</button></div><button class="btn w" style="margin-top:18px" onclick="S.shift=true;S.view=\'panel\';render()">Guardar corte y continuar</button></div></div></div></main>';
}

function viewPanel() {
  return '<main><div class="row2"><div><h1>Panel principal</h1><p class="sub" style="font-weight:500">Recepción, gestión de membresías, pagos y control de accesos en una sola vista.</p></div><div class="sb"><button class="btn o sm" onclick="toast(\'Exportación de reporte\')">Exportar Reporte</button><button class="btn sm" onclick="go(\'inscribir\')">+ Inscribir Nuevo Socio</button></div></div><div class="g g4 gs"><div class="card s"><small class="mut">Socios activos</small><div style="font-size:28px;font-weight:700;color:var(--ok)">980</div><small style="color:var(--ok)">+12 este mes</small></div><div class="card s"><small class="mut">Por vencer (7 días)</small><div style="font-size:28px;font-weight:700;color:var(--warn)">45</div><small style="color:var(--warn)">⚠ Atención requerida</small></div><div class="card s"><small class="mut">Congeladas / pausadas</small><div style="font-size:28px;font-weight:700;color:#60a5fa">18</div><small style="color:#60a5fa">Temporal</small></div><div class="card s"><small class="mut">Tasa de retención</small><div style="font-size:28px;font-weight:700;color:var(--ok)">94.2%</div><small style="color:var(--ok)">Meta: 92.0%</small></div></div><div class="split"><div class="card"><div class="row2"><h2 style="color:var(--tx)">Acciones rápidas</h2><span class="mut">Hoy</span></div><div class="g g3 gs" style="margin-top:18px">' + ['Registro de pago', 'Control de acceso', 'Gestión de usuarios', 'Transferencias', 'Reporte financiero', 'Cobranza'].map((action, index) => '<button class="qa" onclick="go(\'' + ['pago', 'coach', 'usuarios', 'transf', 'reporte', 'panel'][index] + '\')"><div class="hd"><div class="ico">' + icon('plus', 22) + '</div><div class="circ">' + (index + 1) + '</div></div><b>' + action + '</b><span>Atención comercial</span></button>').join('') + '</div></div><div class="card"><div class="row2"><h2 style="color:var(--tx)">Actividad reciente</h2><span class="mut">Últimas 5 acciones</span></div>' + S.act.map((item) => '<div class="ar"><div class="tm">' + item[0] + '</div><div class="ti"><b>' + item[1] + '</b><span>' + item[2] + '</span></div>' + badge(item[4], item[3]) + '</div>').join('') + '</div></div></main>';
}

function viewInscribir() {
  return '<main style="max-width:1000px">' + back('Volver al menú principal', 'panel') + '<div><h1>Inscripción de socio</h1><p class="sub" style="font-weight:500">Registro de miembro nuevo, datos del tutor y consentimiento para la apertura del expediente digital.</p></div><div class="card"><div class="sec">Datos del socio</div><div class="fg"><div class="fld"><label>NOMBRE COMPLETO</label><input id="n0" value="" placeholder="Ej. Fernanda Ruiz"></div><div class="fld"><label>EDAD</label><input id="d0" value="30" maxlength="2"></div><div class="fld"><label>TELÉFONO</label><input id="t0" value="" maxlength="10" placeholder="10 dígitos"></div><div class="fld"><label>CORREO</label><input id="e0" value="" placeholder="correo@ejemplo.com"></div></div></div><div class="card" style="margin-top:20px"><div class="sec">Plan y membresía</div><div class="sel"><button class="' + (S.tier === 'Bronce' ? 'on' : '') + '" onclick="S.tier=\'Bronce\';render()">Bronce</button><button class="' + (S.tier === 'Plata' ? 'on' : '') + '" onclick="S.tier=\'Plata\';render()">Plata</button><button class="' + (S.tier === 'Oro' ? 'on' : '') + '" onclick="S.tier=\'Oro\';render()">Oro</button></div><div class="fg" style="margin-top:16px"><div class="fld"><label>PERSONAS EN EL PLAN</label><input value="' + S.pers + '" onchange="S.pers=Number(this.value)||1;render()"></div><div class="fld"><label>CUOTA BASE</label><input value="' + money(S.P[S.tier]) + '" readonly></div></div><div class="fld" style="margin-top:16px"><label>CÓDIGO DE DESCUENTO</label><input id="dc" placeholder="Ingresar código promocional"></div><button class="btn o" style="margin-top:12px" onclick="applyDisc()">Aplicar descuento</button></div><div class="card" style="margin-top:20px"><div class="sec">Documentación</div><div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center"><div class="drop" onclick="toast(\'Carga de documento simulada\')"><div class="ico">' + icon('id', 26) + '</div>Identificación Oficial (INE) - Frente</div><div class="drop" onclick="toast(\'Carga de foto simulada\')"><div class="ico">' + icon('cam', 26) + '</div>Tomar o subir foto de perfil (Rostro)</div><span class="mut">' + icon('up', 26) + '</span></div><label style="display:flex;gap:8px;align-items:center;margin-top:20px;color:var(--tx);font-size:13px"><input id="ok" type="checkbox" style="width:auto"> El socio acepta el aviso de privacidad</label></div><div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap"><button class="btn r" style="min-width:220px" onclick="go(\'panel\')">Cancelar Registro</button><button class="btn gr" style="min-width:220px" onclick="inscribir()">Registrar Usuario</button></div></main>';
}

function applyDisc() {
  const value = ($('dc').value || '').trim().toUpperCase();
  if (value === 'VERTIGO10') {
    S.disc = 0.1;
    toast('Descuento del 10% aplicado');
  } else {
    S.disc = 0;
    toast('Código no válido');
  }
}

function inscribir() {
  let bad = 0;
  const getValue = (id) => $(id) ? $(id).value.trim() : '';

  for (let index = 0; index < S.pers; index += 1) {
    ['n', 'd', 't', 'e'].forEach((prefix) => {
      const fieldId = prefix + index;
      const value = getValue(fieldId);
      const valid = value && ((prefix !== 't' && prefix !== 'e') || /^\d{10}$/.test(value));
      if ($(fieldId)) $(fieldId).classList.toggle('err', !valid);
      if (!valid) bad += 1;
    });
  }

  if (S.minor && !getValue('tu')) {
    $('tu').classList.add('err');
    bad += 1;
  }

  if (bad) return toast('Revisa los campos marcados en rojo');
  if (!$('ok').checked) return toast('Falta el consentimiento al aviso de privacidad');

  const id = String(32000 + S.M.length);
  const total = Math.round((S.P[S.tier] * S.pers + S.INS) * (1 - S.disc));
  S.M.unshift({ id, n: getValue('n0'), age: 30, plan: S.tier, st: 'activa', v: '14/11/2026', inside: false, tel: '+52 ' + getValue('t0') });
  S.regToday += 1;
  S.paysToday += 1;
  S.folio += 1;
  log('Usuario ' + getValue('n0') + ' registrado', 'Nuevo Perfil · Recepción');
  S.sel = id;
  S.modal = { t: 'Usuario registrado', n: getValue('n0'), c: 'Inscripción + plan ' + S.tier, a: total, f: S.folio, msg: 'Se envió el mensaje de bienvenida por correo.' };
  render();
}

function viewPago() {
  const member = memberById(S.sel) || S.M[0];
  const query = S.q.toLowerCase();
  const results = S.M.filter((person) => !query || (person.n + person.id + person.tel).toLowerCase().includes(query));
  const multa = member.st === 'vencida' ? S.MULTA : 0;
  const total = S.P[member.plan] + multa;

  return '<main style="max-width:1200px">' + back('Volver al menú principal', 'panel') + '<div><h1>Registro de pago</h1><p class="sub" style="font-weight:500">Busca un usuario y registra su pago de membresía.</p></div><div class="srch">' + icon('search', 18, '#888') + '<input id="qs" value="' + S.q + '" placeholder="Buscar usuario por nombre, teléfono o ID..." onkeydown="if(event.key===\'Enter\'){S.q=this.value;render()}"><small>Presiona Enter para buscar</small></div><div class="split" style="grid-template-columns:minmax(260px,1fr) minmax(300px,1.6fr)"><div><div class="row2 mut" style="font-size:12px;margin-bottom:10px"><b>Resultados de búsqueda</b><span>' + results.length + ' usuarios</span></div>' + results.map((person) => '<div class="li ' + (person.id === member.id ? 'sel2' : '') + '" onclick="S.sel=\'' + person.id + '\';render()"><div style="display:flex;gap:12px;align-items:center"><div class="av ' + (person.id === member.id ? 'l' : '') + '">' + initials(person.n) + '</div><div><b>' + person.n + '</b><div class="mut" style="font-size:11px">ID: #' + person.id + '</div></div></div>' + statusBadge(person.st) + '</div>').join('') + '</div><div style="display:flex;flex-direction:column;gap:16px"><div class="card"><div class="row2"><div style="display:flex;gap:14px;align-items:center"><div class="av l" style="width:56px;height:56px">' + initials(member.n) + '</div><div><b style="font-size:18px">' + member.n + '</b> <span class="mut" style="font-size:12px">ID: #' + member.id + '</span><div class="mut" style="font-size:12px">' + member.age + ' años · ' + member.tel + '</div></div></div>' + statusBadge(member.st) + '</div><div class="info4"><div><small>Membresía</small>' + badge(member.plan === 'Oro' ? 'warn' : 'mut', '● ' + member.plan.toUpperCase()) + '</div><div><small>Vencimiento</small><b>' + member.v + '</b></div><div><small>Último pago</small><b>28/08/2026</b></div><div><small>Días restantes</small><b>' + (member.st === 'vencida' ? '−5' : member.st === 'pausa' ? '—' : '3') + '</b></div></div></div><div class="card"><div class="sec" style="color:var(--tx)">Registrar pago</div>' + (multa ? '<div style="margin-bottom:14px">' + badge('bad', 'Fuera de tolerancia: se suma multa de ' + money(multa)) + '</div>' : '') + (member.st === 'pausa' ? '<div style="margin-bottom:14px">' + badge('warn', 'Membresía en pausa: reanúdala antes de cobrar') + '</div>' : '') + '<div class="fg"><div class="fld"><label>TIPO DE PAGO</label><select><option>Membresía mensual</option><option>Pase por día</option></select></div><div class="fld"><label>FECHA DE PAGO</label><input value="14/10/2026"></div></div><div class="fld" style="margin-top:14px"><label>MONTO</label><input value="' + money(total) + '.00" readonly></div><label style="margin-top:14px">MÉTODO DE PAGO</label><div class="pills">' + ['Efectivo', 'Transferencia', 'Efectivo + Transferencia'].map((method) => '<button class="' + (S.method === method ? 'on' : '') + '" onclick="S.method=\'' + method + '\';render()">' + method + '</button>').join('') + '</div><div class="fld" style="margin-top:14px"><label>NOTAS (OPCIONAL)</label><textarea rows="3" placeholder="Ej. Pago adelantado, clase extra, etc."></textarea></div><button class="btn w" style="margin-top:16px" ' + (member.st === 'pausa' ? 'disabled' : '') + ' onclick="cobrar()">' + icon('check', 18) + ' Confirmar pago</button></div></div></div></main>';
}

function cobrar() {
  const member = memberById(S.sel);
  const multa = member.st === 'vencida' ? S.MULTA : 0;
  const total = S.P[member.plan] + multa;

  if (S.method !== 'Efectivo') {
    S.pend += 1;
    log('Pago pendiente: Transferencia de ' + member.n, 'Caja · Recepcionista B', 'Transferencia Sin Verificar', 'warn');
    S.T.unshift({ f: 'TR-' + (26005 + S.T.length), n: member.n, id: 'V-' + member.id, h: 'ahora', b: 'Por confirmar', m: total, s: 'pend' });
    S.modal = { t: 'Transferencia en revisión', n: member.n, c: 'Mensualidad ' + member.plan, a: total, f: null, msg: 'La membresía no se activa hasta que el administrador apruebe el pago.' };
    return render();
  }

  S.folio += 1;
  S.paysToday += 1;
  member.st = 'activa';
  member.v = '28/10/2026';
  log('Pago procesado: Ticket #' + S.folio, 'Caja · Recepcionista B', 'Pago Exitoso');
  S.modal = { t: 'Pago registrado', n: member.n, c: 'Mensualidad ' + member.plan + (multa ? ' + multa' : ''), a: total, f: S.folio, msg: 'Membresía activa hasta el 28/10/2026.' };
  render();
}

function viewUsuarios() {
  const filter = S.filt;
  const member = memberById(S.sel) || S.M[0];
  const list = S.M.filter((person) => filter === 'todos' || person.st === filter);
  const countByStatus = (key) => S.M.filter((person) => person.st === key).length;
  const percent = member.st === 'vencida' ? '6%' : member.st === 'pausa' ? '0%' : '90%';

  return '<main>' + back('Volver al menú principal', 'panel') + '<div class="row2"><div><h1>Gestión de usuarios</h1><p class="sub" style="font-weight:500">Administra atletas, renovaciones, congelamientos y control de acceso en tiempo real.</p></div><div style="display:flex;gap:12px"><button class="btn o sm" onclick="toast(\'Exportación de reporte\')">Exportar Reporte</button><button class="btn sm" onclick="go(\'inscribir\')">+ Inscribir Nuevo Socio</button></div></div><div class="g g4 gs">' + [['Socios Activos', '980', '+12 este mes', 'var(--ok)'], ['Por Vencer (7 días)', '45', '⚠ Atención requerida', 'var(--warn)'], ['Congeladas / Pausadas', 18 + countByStatus('pausa') - 1, 'Temporal', '#60a5fa'], ['Tasa Retención', '94.2%', 'Meta: 92.0%', 'var(--ok)']].map((stat) => '<div class="card s" style="padding:18px"><small class="mut">' + stat[0] + '</small><div style="font-size:26px;font-weight:700">' + stat[1] + '</div><small style="color:' + stat[3] + '">' + stat[2] + '</small></div>').join('') + '</div><div class="card s" style="padding:14px"><div class="srch">' + icon('search', 18, '#888') + '<input placeholder="Buscar usuario por nombre, teléfono o ID... Presiona Enter para buscar"></div><div class="pills" style="margin-top:12px"><button>Nivel: Todos</button><button>Plan: Todos</button><button>Sede Central</button></div><div class="pills" style="margin-top:12px">' + [['todos', 'TODOS (' + S.M.length + ')'], ['activa', '● ACTIVOS'], ['porvencer', '● POR VENCER'], ['pausa', '● PAUSADOS'], ['vencida', '● VENCIDOS']].map((item) => '<button class="' + (filter === item[0] ? 'on' : '') + '" onclick="S.filt=\'' + item[0] + '\';render()">' + item[1] + '</button>').join('') + '</div><div class="wrap" style="margin-top:16px"><table><tr><th>Usuario</th><th>Plan</th><th>Estado</th><th>Último pago</th></tr>' + list.map((person) => '<tr class="hl"><td><b>' + person.n + '</b></td><td>' + person.plan + '</td><td>' + statusBadge(person.st) + '</td><td>28/09/2026</td></tr>').join('') + '</table></div></div></main>';
}

function viewTransf() {
  return '<main><div><h1>Transferencias por confirmar</h1><p class="sub" style="font-weight:500">Revisa los pagos pendientes y aprueba transferencias antes de activar memberships.</p></div><div class="card"><div class="wrap"><table><tr><th>Folio</th><th>Usuario</th><th>ID</th><th>Hora</th><th>Banco / Referencia</th><th>Monto</th><th>Estado</th></tr>' + S.T.map((item) => '<tr><td>' + item.f + '</td><td>' + item.n + '</td><td>' + item.id + '</td><td>' + item.h + '</td><td>' + item.b + '</td><td>' + money(item.m) + '</td><td>' + badge(item.s === 'pend' ? 'warn' : 'ok', item.s === 'pend' ? 'Pendiente' : 'Aprobado') + '</td></tr>').join('') + '</table></div></div></main>';
}

function viewReporte() {
  const ingresos = S.M.length * 800;
  const gastos = 4100;
  return '<main>' + back('Volver al Panel Principal', 'panel') + '<div><h1>Reporte de ingresos y gastos</h1><p class="sub" style="font-weight:500">Solo visible para el Administrador · octubre 2026</p></div><div class="g g3 gs"><div class="card s"><small class="mut">Ingresos</small><div style="font-size:28px;font-weight:700;color:var(--ok)">' + money(ingresos) + '</div></div><div class="card s"><small class="mut">Gastos</small><div style="font-size:28px;font-weight:700;color:var(--bad)">' + money(gastos) + '</div></div><div class="card s"><small class="mut">Balance</small><div style="font-size:28px;font-weight:700;color:var(--lime)">' + money(ingresos - gastos) + '</div></div></div><div class="g g2"><div class="card"><h2>Ingresos por concepto</h2><div class="kv"><span>Membresías</span><b>' + money(ingresos) + '</b></div><div class="kv"><span>Clases extras</span><b>$1,800.00</b></div><div class="kv"><span>Venta de productos</span><b>$950.00</b></div></div><div class="card"><h2>Gastos por categoría</h2><div class="kv"><span>Staff</span><b>$1,800.00</b></div><div class="kv"><span>Servicios</span><b>$1,100.00</b></div><div class="kv"><span>Inventario</span><b>$1,200.00</b></div><button class="btn l w" style="margin-top:12px" onclick="toast(\'Exportación a PDF / Excel disponible en el sistema\')">Exportar PDF / Excel</button></div></div></main>';
}

function viewCoach() {
  const result = S.coachRes;
  return '<main style="max-width:1200px"><div class="crumb"><span>Coach / Fuerza / Control de acceso</span><span>14 OCT 2026 · 10:45</span></div><div class="row2"><div><h1>Escanear credencial</h1><p class="sub" style="font-weight:500;font-size:14px">Lee el QR del miembro para comprobar su identidad, membresía y área autorizada.</p></div><button class="btn o" onclick="go(\'area\')">← Volver a mi área</button></div><div class="split" style="grid-template-columns:minmax(0,1.7fr) minmax(280px,1fr)"><div class="card"><div class="row2" style="margin-bottom:14px"><b>Lector de credenciales</b><span class="mono mut">CÁMARA FRONTAL · COACH-01</span></div><div class="scan"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i>' + (result ? '<div>' + badge(result.k, result.t) + '<h2 style="color:var(--tx);justify-content:center;margin:14px 0 6px">' + result.n + '</h2><div class="mut">' + result.d + '</div></div>' : '<div>' + icon('qr', 34, '#888') + '<p class="mut">Coloca el código dentro del marco</p><p class="mono mut" style="margin-top:40px">ESPERANDO CREDENCIAL · NO HAY LECTURA EN CURSO</p></div>') + '</div><div class="row2" style="margin-top:14px"><span class="mut" style="font-size:12px">Área de validación: Fuerza · A-01</span><button class="btn o sm" onclick="toast(\'Cambio de cámara simulado\')">Cambiar cámara</button></div><div class="mut" style="font-size:12px;margin:18px 0 8px">SIMULAR LECTURA DE:</div><div class="pills">' + S.M.map((member) => '<button onclick="scan(\'' + member.id + '\')">' + member.n.split(' ')[0] + ' · ' + STATUS[member.st][0] + '</button>').join('') + '</div></div><div style="display:flex;flex-direction:column;gap:24px"><div class="card"><div class="sec" style="color:var(--tx)">Antes de escanear</div><div class="step"><em>01</em><div><b>Solicita la credencial</b><span>El miembro puede mostrar su QR en la app o en su tarjeta.</span></div></div><div class="step"><em>02</em><div><b>Encuadra el código</b><span>Mantén el QR visible, sin reflejos y a unos 20 cm de la cámara.</span></div></div><div class="step"><em>03</em><div><b>Verifica y confirma</b><span>Revisa la fotografía y el área antes de registrar su entrada.</span></div></div></div><div class="card"><div class="sec" style="color:var(--tx)">¿No se puede leer el QR?</div><p class="mut" style="font-size:12px">Busca la credencial con el ID del miembro. Se aplican las mismas validaciones.</p><label>ID DEL MIEMBRO</label><input id="mid" placeholder="Ej. 24890" style="margin-bottom:12px"><button class="btn w" onclick="var member=memberById($(\'mid\').value.trim()); member ? scan(member.id) : toast(\'Miembro no encontrado\')">' + icon('search', 16) + ' Buscar miembro</button></div></div></div><div class="card s" style="padding:14px;font-size:12px">ⓘ Una lectura no registra una entrada. Si el miembro ya está en el área, su acceso aparece como «Ya está dentro» y la confirmación queda bloqueada.</div></main>';
}

function scan(id) {
  const member = memberById(id);
  let result;

  if (member.inside) {
    result = { k: 'warn', t: 'YA ESTÁ DENTRO', n: member.n, d: 'La confirmación de entrada queda bloqueada.' };
  } else if (member.st === 'vencida') {
    result = { k: 'bad', t: 'ACCESO DENEGADO · MEMBRESÍA VENCIDA', n: member.n, d: 'Dirigir a recepción para regularizar el adeudo.' };
  } else if (member.st === 'pausa') {
    result = { k: 'bad', t: 'ACCESO DENEGADO · EN PAUSA', n: member.n, d: 'Debe reanudar su membresía en recepción.' };
  } else if (S.aforo >= 25) {
    result = { k: 'warn', t: 'AFORO COMPLETO', n: member.n, d: 'Espera a que salga un atleta.' };
  } else {
    member.inside = true;
    S.aforo += 1;
    result = { k: 'ok', t: 'ACCESO PERMITIDO', n: member.n, d: 'Entrada registrada · Plan ' + member.plan + (member.st === 'porvencer' ? ' · vence pronto' : '') };
  }

  S.coachRes = result;
  render();
}

function viewArea() {
  return '<main style="max-width:1000px"><div><h1>Mi área · Fuerza</h1><p class="sub" style="font-weight:500">Zona A-01 · Turno 06:00 – 14:00</p></div><div class="g g3 gs"><div class="card s"><small class="mut">Aforo actual</small><div style="font-size:28px;font-weight:700">' + S.aforo + ' / 25</div><div class="bar" style="margin-top:8px"><i style="width:' + Math.round((S.aforo / 25) * 100) + '%"></i></div></div><div class="card s"><small class="mut">Próxima clase</small><div style="font-size:20px;font-weight:700">Parkour · 11:00</div><small class="mut">17 / 20 inscritos</small></div></div><div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn" onclick="go(\'coach\')">Escanear QR</button><button class="btn o" onclick="go(\'presentes\')">Miembros presentes</button></div></main>';
}

function viewPres() {
  const list = S.M.filter((member) => member.inside);
  return '<main style="max-width:1000px"><div><h1>Miembros presentes</h1><p class="sub" style="font-weight:500">Aforo ' + S.aforo + ' / 25 · ' + list.length + ' registrados en esta demo</p></div>' + (list.length ? list.map((member) => '<div class="li" style="cursor:default"><div style="display:flex;gap:12px;align-items:center"><div class="av l">' + initials(member.n) + '</div><div><b>' + member.n + '</b><div class="mut" style="font-size:11px">Plan ' + member.plan + '</div></div></div><button class="btn o sm" onclick="out(\'' + member.id + '\')">Registrar salida</button></div>').join('') : '<div class="card mut">Nadie dentro todavía.</div>') + '</main>';
}

function out(id) {
  const member = memberById(id);
  member.inside = false;
  S.aforo -= 1;
  toast('Salida confirmada');
}

function render() {
  const views = {
    login: viewLogin,
    turno: viewTurno,
    panel: viewPanel,
    inscribir: viewInscribir,
    pago: viewPago,
    usuarios: viewUsuarios,
    transf: viewTransf,
    reporte: viewReporte,
    coach: viewCoach,
    area: viewArea,
    presentes: viewPres
  };

  const currentY = window.scrollY;
  $('app').innerHTML = (S.role ? renderNavbar() + renderTabs() : '') + views[S.view]() + (S.role ? '<div class="foot"><span>● VÉRTIGO! TACTICAL FITNESS · Terminal POS-01 Mostrador Principal</span><span class="mono">IP: 192.168.1.45 · Versión 4.2.8 · Build Producción</span></div>' : '');
  $('ov').innerHTML = renderModal() + (S.toast ? '<div class="toast">' + S.toast + '</div>' : '');
  window.scrollTo(0, currentY);
}

render();
