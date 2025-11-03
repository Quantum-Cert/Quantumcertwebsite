import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Plus,
  Search,
  Eye,
  Shield,
  TrendingUp,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DashboardPageProps {
  onLogout: () => void;
}

interface Asset {
  id: string;
  name: string;
  type: string;
  status: "active" | "pending" | "verified";
  certDate: string;
  owner: string;
  value: string;
}

export function DashboardPage({ onLogout }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [assets, setAssets] = useState<Asset[]>([
    {
      id: "QC-2025-001",
      name: "Crédito de Carbono - Amazônia",
      type: "Crédito de Carbono",
      status: "verified",
      certDate: "2025-01-15",
      owner: "Green Corp Ltd",
      value: "R$ 150.000",
    },
    {
      id: "QC-2025-002",
      name: "Arte Digital NFT",
      type: "NFT",
      status: "active",
      certDate: "2025-02-20",
      owner: "Art Collector",
      value: "R$ 50.000",
    },
    {
      id: "QC-2025-003",
      name: "Propriedade Rural",
      type: "Imóvel",
      status: "verified",
      certDate: "2025-03-10",
      owner: "Fazenda Santa Maria",
      value: "R$ 2.500.000",
    },
    {
      id: "QC-2025-004",
      name: "Token de Energia Solar",
      type: "Energia Renovável",
      status: "pending",
      certDate: "2025-10-25",
      owner: "Solar Energy Inc",
      value: "R$ 75.000",
    },
    {
      id: "QC-2025-005",
      name: "Certificado de Origem - Café",
      type: "Commodity",
      status: "verified",
      certDate: "2025-09-05",
      owner: "Coffee Traders",
      value: "R$ 200.000",
    },
  ]);

  const [newAsset, setNewAsset] = useState({
    name: "",
    type: "",
    owner: "",
    value: "",
    description: "",
  });

  const handleAddAsset = () => {
    if (newAsset.name && newAsset.type && newAsset.owner) {
      const asset: Asset = {
        id: `QC-2025-${String(assets.length + 1).padStart(3, "0")}`,
        name: newAsset.name,
        type: newAsset.type,
        status: "pending",
        certDate: new Date().toISOString().split("T")[0],
        owner: newAsset.owner,
        value: newAsset.value,
      };
      setAssets([...assets, asset]);
      setNewAsset({ name: "", type: "", owner: "", value: "", description: "" });
      setIsAddDialogOpen(false);
    }
  };

  const stats = [
    {
      title: "Total de Ativos",
      value: assets.length.toString(),
      icon: FileText,
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Ativos Verificados",
      value: assets.filter((a) => a.status === "verified").length.toString(),
      icon: Shield,
      change: "+8%",
      changeType: "positive" as const,
    },
    {
      title: "Valor Total",
      value: "R$ 3M",
      icon: TrendingUp,
      change: "+23%",
      changeType: "positive" as const,
    },
    {
      title: "Certificações Ativas",
      value: assets.filter((a) => a.status === "active").length.toString(),
      icon: Activity,
      change: "+5%",
      changeType: "positive" as const,
    },
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    active: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    verified: "bg-primary/10 text-primary border-primary/20",
  };

  const statusLabels = {
    active: "Ativo",
    pending: "Pendente",
    verified: "Verificado",
  };

  const menuItems = [
    { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
    { id: "assets", label: "Ativos", icon: FileText },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed left-0 top-0 bottom-0 w-64 bg-secondary/30 border-r border-border z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              QUANTUM.CERT
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Button
            onClick={onLogout}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-border">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-muted-foreground hover:text-foreground"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Bem-vindo, Admin
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  admin@gmail.com
                </Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 lg:p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-secondary/30 border-primary/20 p-6 hover:border-primary/40 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {stat.title}
                          </p>
                          <p className="text-3xl mb-2">{stat.value}</p>
                          <p className="text-sm text-primary">{stat.change}</p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Assets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-secondary/30 border-primary/20">
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl">Ativos Recentes</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {assets.slice(0, 5).map((asset) => (
                        <div
                          key={asset.id}
                          className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/40 transition-colors"
                        >
                          <div className="flex-1">
                            <h3 className="mb-1">{asset.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {asset.id} • {asset.type}
                            </p>
                          </div>
                          <Badge
                            className={`${statusColors[asset.status]} border`}
                          >
                            {statusLabels[asset.status]}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          )}

          {activeTab === "assets" && (
            <div className="space-y-6">
              {/* Header Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar ativos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/30 border-border focus:border-primary"
                  />
                </div>

                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Plus className="w-5 h-5 mr-2" />
                      Adicionar Ativo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Novo Ativo</DialogTitle>
                      <DialogDescription>
                        Adicione um novo ativo para certificação
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="asset-name">Nome do Ativo</Label>
                        <Input
                          id="asset-name"
                          placeholder="Ex: Crédito de Carbono"
                          value={newAsset.name}
                          onChange={(e) =>
                            setNewAsset({ ...newAsset, name: e.target.value })
                          }
                          className="bg-secondary/30 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asset-type">Tipo</Label>
                        <Select
                          value={newAsset.type}
                          onValueChange={(value) =>
                            setNewAsset({ ...newAsset, type: value })
                          }
                        >
                          <SelectTrigger className="bg-secondary/30 border-border">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Crédito de Carbono">
                              Crédito de Carbono
                            </SelectItem>
                            <SelectItem value="NFT">NFT</SelectItem>
                            <SelectItem value="Imóvel">Imóvel</SelectItem>
                            <SelectItem value="Energia Renovável">
                              Energia Renovável
                            </SelectItem>
                            <SelectItem value="Commodity">Commodity</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asset-owner">Proprietário</Label>
                        <Input
                          id="asset-owner"
                          placeholder="Ex: Nome da Empresa"
                          value={newAsset.owner}
                          onChange={(e) =>
                            setNewAsset({ ...newAsset, owner: e.target.value })
                          }
                          className="bg-secondary/30 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asset-value">Valor</Label>
                        <Input
                          id="asset-value"
                          placeholder="Ex: R$ 150.000"
                          value={newAsset.value}
                          onChange={(e) =>
                            setNewAsset({ ...newAsset, value: e.target.value })
                          }
                          className="bg-secondary/30 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asset-description">Descrição</Label>
                        <Textarea
                          id="asset-description"
                          placeholder="Descrição do ativo..."
                          value={newAsset.description}
                          onChange={(e) =>
                            setNewAsset({
                              ...newAsset,
                              description: e.target.value,
                            })
                          }
                          className="bg-secondary/30 border-border min-h-[100px]"
                        />
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={handleAddAsset}
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          Adicionar
                        </Button>
                        <Button
                          onClick={() => setIsAddDialogOpen(false)}
                          variant="outline"
                          className="flex-1"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Assets Table */}
              <Card className="bg-secondary/30 border-primary/20">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data Cert.</TableHead>
                        <TableHead>Proprietário</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAssets.map((asset) => (
                        <TableRow
                          key={asset.id}
                          className="border-border hover:bg-secondary/50"
                        >
                          <TableCell className="text-primary">
                            {asset.id}
                          </TableCell>
                          <TableCell>{asset.name}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {asset.type}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`${statusColors[asset.status]} border`}
                            >
                              {statusLabels[asset.status]}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {new Date(asset.certDate).toLocaleDateString("pt-BR")}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {asset.owner}
                          </TableCell>
                          <TableCell>{asset.value}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary hover:bg-primary/10"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-secondary/30 border-primary/20 p-6 max-w-2xl">
                <h2 className="text-xl mb-6">Configurações</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      value="admin@gmail.com"
                      disabled
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Nome da Organização</Label>
                    <Input
                      defaultValue="Quantum.Cert"
                      className="bg-secondary/30 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Select defaultValue="brazil">
                      <SelectTrigger className="bg-secondary/30 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brazil">
                          (GMT-3) Brasília
                        </SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
