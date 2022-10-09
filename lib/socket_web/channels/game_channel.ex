defmodule SocketWeb.GameChannel do
  use SocketWeb, :channel

  @impl true
  def join("game:lobby", _payload, socket) do
    IO.puts("New connection")

    {:ok, socket}
  end

  @impl true
  def handle_in("join", payload, socket) do
    broadcast(socket, "join", payload)
    # players = []

    # Enum.concat(players, [payload["blob"]])

    {:noreply, socket}
  end

  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end
end
