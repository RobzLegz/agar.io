defmodule SocketWeb.GameChannel do
  use SocketWeb, :channel

  @impl true
  @spec join(<<_::80>>, nil | maybe_improper_list | map, Phoenix.Socket.t()) ::
          {:ok, Phoenix.Socket.t()}
  def join("game:lobby", _payload, socket) do
    IO.puts("New connection")

    {:ok, socket}
  end

  @impl true
  def handle_in("move", payload, socket) do
    broadcast(socket, "move", payload)
    {:noreply, socket}
  end
end
